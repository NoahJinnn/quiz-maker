package com.personal.QuizMaker.controller;

import com.personal.QuizMaker.model.User;
import com.personal.QuizMaker.model.UserHistory;
import com.personal.QuizMaker.repository.UserHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class HistoryUserController {

    @Autowired
    private UserHistoryRepository userHistoryRepository;

    @GetMapping("/userHistory")
    public ResponseEntity<List<UserHistory>> getAllUsers() {
        return new ResponseEntity<>(userHistoryRepository.findAll(), HttpStatus.OK);
    }
}
