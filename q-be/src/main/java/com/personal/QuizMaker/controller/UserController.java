package com.personal.QuizMaker.controller;

import com.personal.QuizMaker.model.*;
import com.personal.QuizMaker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/checkStart")
    public ResponseEntity<AllowStartDTO> checkStartGame() {
        AllowStartDTO allowStartDTO = new AllowStartDTO();
        allowStartDTO.setAllowStart(userService.isPlayTime());
        return new ResponseEntity<>(allowStartDTO, HttpStatus.OK);
    }

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

    @PutMapping("/point")
    public ResponseEntity<String> updateUserPoint(@RequestBody AddPointDTO addPointDTO) {
        userService.updateUserPoint(addPointDTO);
        return new ResponseEntity<>("Update success", HttpStatus.OK);
    }

    @DeleteMapping("/allUsers")
    public ResponseEntity<String> removeAll() {
        userService.removeAllUsers();
        return new ResponseEntity<>("Remove success", HttpStatus.OK);
    }

    @DeleteMapping("/user")
    public ResponseEntity<String> removeUser(@PathParam(value = "officeId") String officeId) {
        userService.removeByOfficeId(officeId);
        return new ResponseEntity<>("Remove success", HttpStatus.OK);
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
