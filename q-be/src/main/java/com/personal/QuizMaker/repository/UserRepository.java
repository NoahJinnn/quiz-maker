package com.personal.QuizMaker.repository;

import com.personal.QuizMaker.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
