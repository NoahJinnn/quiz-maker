package com.personal.QuizMaker.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document("user-history")
public class UserHistory {
    @Id
    String id;
    String userId;
    User user;
    int quizListId = 0;

    public UserHistory(String userId, User user, int quizListId) {
        this.userId = userId;
        this.user = user;
        this.quizListId = quizListId;
    }
}
