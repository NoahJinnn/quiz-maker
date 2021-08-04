package com.personal.QuizMaker.repository;

import com.personal.QuizMaker.model.UserHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserHistoryRepository extends MongoRepository<UserHistory, String> {
    UserHistory findByUserId(String userId);
}
