package com.personal.QuizMaker.repository;

import com.personal.QuizMaker.model.Quiz;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends MongoRepository<Quiz, String > {
}
