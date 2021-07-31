package com.personal.QuizMaker.model;

public class DuplicateNameException extends RuntimeException {
    public DuplicateNameException(String msg) {
        super(msg);
    }
}
