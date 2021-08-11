package com.personal.QuizMaker.model;

public class MailNotFoundException extends RuntimeException {
    public MailNotFoundException(String msg) {
        super(msg);
    }
}
