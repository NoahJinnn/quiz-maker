package com.personal.QuizMaker.model;

import lombok.Builder;
import org.springframework.data.annotation.Id;

import java.util.HashSet;
import java.util.Set;

@Builder
public class CopyUser {
    private String id;
    private String name;
    private String officeId;
    int point = 0;
    Set<String> answeredQuizs = new HashSet<>();
}
