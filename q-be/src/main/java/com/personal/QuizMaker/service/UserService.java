package com.personal.QuizMaker.service;

import com.mongodb.WriteConcernException;
import com.personal.QuizMaker.model.DuplicateNameException;
import com.personal.QuizMaker.model.User;
import com.personal.QuizMaker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.PriorityQueue;

@Service
public class UserService {

    private PriorityQueue<User> userQueue = new PriorityQueue<>((a, b) -> {
        Instant hbA = a.getHeartbeat();
        Instant hbB = b.getHeartbeat();
        if (hbA.isAfter(hbB)) {
            return -1;
        } else if (hbA.isBefore(hbB)) {
            return 1;
        }
        return 0;
    });

    @Autowired
    private UserRepository userRepository;

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
            userQueue.add(savedUser);
            return savedUser;
        } catch (WriteConcernException ex) {
            if (ex.getCode() == 11000)
                throw new DuplicateNameException("User already exists for this name");
            else
                throw ex;
        }

    }

}
