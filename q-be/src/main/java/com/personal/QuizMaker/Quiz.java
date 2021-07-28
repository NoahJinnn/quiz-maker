package com.personal.QuizMaker;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document("quizs")
public class Quiz {
    @Id
    String id;
    int quizListId = 0;
    String quizContent = "";
    List<Answer> answers = new ArrayList<>();
    int rightAnswer = 0;
    int timeLimit = 0;
    int point = 0;
    String mediaLink = "";

}
