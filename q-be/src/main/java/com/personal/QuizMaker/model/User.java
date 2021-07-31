package com.personal.QuizMaker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@Document("users")
public class User {
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    int point = 0;
    @Transient
    Instant heartbeat = Instant.now();

}
