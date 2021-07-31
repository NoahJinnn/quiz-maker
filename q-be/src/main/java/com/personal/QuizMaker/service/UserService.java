package com.personal.QuizMaker.service;

import com.mongodb.WriteConcernException;
import com.personal.QuizMaker.model.DuplicateNameException;
import com.personal.QuizMaker.model.User;
import com.personal.QuizMaker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
public class UserService {

    private final Map<String, User> userMap = new HashMap<>();
    private ScheduledExecutorService validator;
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    void initScheduler() {
        validator = Executors.newSingleThreadScheduledExecutor();
        validator.scheduleWithFixedDelay(() -> {
            long currentTime = Instant.now().toEpochMilli();
            List<String> removeIds = new ArrayList<>();
            for(User user : userMap.values()) {
                long userHeartbeat = user.getHeartbeat().toEpochMilli();
                if(currentTime - userHeartbeat >= 60*1000000) {
                    removeIds.add(user.getId());
                }
            }

            for(String id : removeIds) {
                userMap.remove(id);
                userRepository.deleteById(id);
            }

        }, 1, 1, TimeUnit.SECONDS);
    }

    @PreDestroy
    void shutdownScheduler() {
        validator.shutdown();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElseThrow(() -> new RuntimeException("Can't find user"));
    }

    public User createUser(User user) {
        try {
            User savedUser = userRepository.save(user);
            userMap.put(savedUser.getId(), savedUser);
            return savedUser;
        } catch (WriteConcernException ex) {
            if (ex.getCode() == 11000)
                throw new DuplicateNameException("User already exists for this name");
            else
                throw ex;
        }
    }

    public Map<String, User> getUserMap() {
        return userMap;
    }


}
