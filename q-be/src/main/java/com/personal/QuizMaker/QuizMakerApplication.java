package com.personal.QuizMaker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;

@SpringBootApplication
public class QuizMakerApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuizMakerApplication.class, args);
    }

}
