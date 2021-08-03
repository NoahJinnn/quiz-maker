package com.personal.QuizMaker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Document("quizs")
public class Quiz {
    @Id
    String id;
    int quizListId = 0;
    @Indexed(unique = true)
    String quizContent = "";
    List<String> answers = new ArrayList<>();
    int rightAnswer = 0;
    int timeLimit = 0;
    int point = 0;
    String mediaLink = "";
}
