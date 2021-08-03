package com.personal.QuizMaker.model;

import lombok.Data;

@Data
public class AddPointDTO {
    String userId;
    String quizId;
    int addPoint;
    int quizListId;
}
