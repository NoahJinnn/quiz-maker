package com.personal.QuizMaker.controller;

import com.personal.QuizMaker.model.ApiError;
import com.personal.QuizMaker.model.DuplicateNameException;
import com.personal.QuizMaker.model.User;
import com.personal.QuizMaker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AccessController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiError> handleStorageFileNotFound(RuntimeException exc) {
        exc.printStackTrace();
        if(exc instanceof DuplicateNameException) {
            return new ResponseEntity<>(new ApiError(exc.getMessage() ,11000), HttpStatus.BAD_REQUEST);
        } else if(exc instanceof DuplicateKeyException) {
            return new ResponseEntity<>(new ApiError(exc.getMessage() ,11000), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiError(exc.getMessage() ,0), HttpStatus.BAD_REQUEST);
    }
}
