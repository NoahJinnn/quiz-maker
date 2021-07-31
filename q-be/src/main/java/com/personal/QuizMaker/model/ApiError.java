package com.personal.QuizMaker.model;

import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class ApiError {
    private String timestamp;
    private String msg;
    private int errorCode;

    public ApiError(String msg, int errorCode) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String formattedDate = formatter.format(LocalDateTime.now());
        this.msg = msg;
        this.timestamp = formattedDate;
        this.errorCode = errorCode;
    }

}
