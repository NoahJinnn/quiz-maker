package com.personal.QuizMaker.service;

import com.mongodb.WriteConcernException;
import com.personal.QuizMaker.model.*;
import com.personal.QuizMaker.repository.QuizRepository;
import com.personal.QuizMaker.repository.UserHistoryRepository;
import com.personal.QuizMaker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
public class UserService {

    private final Map<String, User> userMap = new ConcurrentHashMap<>();
    private ScheduledExecutorService validator;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserHistoryRepository userHistoryRepository;
    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private SocketService socketService;

    @PostConstruct
    void initScheduler() {
        validator = Executors.newSingleThreadScheduledExecutor();
        validator.scheduleWithFixedDelay(() -> {
            long currentTime = Instant.now().getEpochSecond();
            List<String> removeIds = new ArrayList<>();
            for (User user : userMap.values()) {
                long userHeartbeat = user.getHeartbeat().getEpochSecond();
                if (currentTime - userHeartbeat >= 60*60) {
                    removeIds.add(user.getId());
                }
            }

            for (String id : removeIds) {
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
            // Record user
            UserHistory userHistory = new UserHistory(savedUser.getId(), savedUser, 0);
            userHistoryRepository.save(userHistory);
            // Add user to heartbeat map
            userMap.put(savedUser.getId(), savedUser);
            return savedUser;
        } catch (WriteConcernException ex) {
            if (ex.getCode() == 11000)
                throw new DuplicateNameException("User already exists for this name");
            else
                throw ex;
        }
    }

    public void updateUserPoint(AddPointDTO addPointDTO) {
        String quizId = addPointDTO.getQuizId();
        String userId = addPointDTO.getUserId();
        Optional<User> userOptional = userRepository.findById(userId);
        User user = userOptional.orElseThrow(() -> new RuntimeException("Can't find user with this id"));
        if (user.getAnsweredQuizs().contains(quizId)) {
            return;
        }
        user.getAnsweredQuizs().add(quizId);
        int addPoint = addPointDTO.getAddPoint();
        user.setPoint(user.getPoint() + addPoint);
        userRepository.save(user);
        socketService.sendMsg(user);

        // Record user state
        UserHistory userHistory = userHistoryRepository.findByUserId(userId);
        Optional<Quiz> optionalQuiz = quizRepository.findById(quizId);
        Quiz currentQuiz = optionalQuiz.orElseThrow(() -> new RuntimeException("Can't find current quiz"));
        userHistory.setUser(user);
        userHistory.setQuizListId(currentQuiz.getQuizListId());
        userHistoryRepository.save(userHistory);
    }

    public Map<String, User> getUserMap() {
        return userMap;
    }

    public boolean isPlayTime() {
        Calendar calendar = new GregorianCalendar();
        TimeZone timeZone = TimeZone.getTimeZone("Asia/Ho_Chi_Minh");
        calendar.setTimeZone(timeZone);
        long hour = calendar.get(Calendar.HOUR_OF_DAY);
        long min = calendar.get(Calendar.MINUTE);
        long sec = calendar.get(Calendar.SECOND);
        System.out.println(hour + ":" + min + ":" + sec);
        if(hour == 16 && min < 30) {
            return true;
        }
        return false;
    }

}
