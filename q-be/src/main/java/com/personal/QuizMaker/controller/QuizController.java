package com.personal.QuizMaker.controller;

import com.personal.QuizMaker.model.ApiError;
import com.personal.QuizMaker.model.Quiz;
import com.personal.QuizMaker.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @RequestMapping(value = "/quiz", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public ResponseEntity<Quiz> createQuiz(@RequestPart("quiz") Quiz quiz,
                                           @RequestPart(value="file", required=false) MultipartFile file
                                    ) throws IOException {
        if(file != null) {
            String mediaPath = quizService.saveUploadedFile(file);
            quiz.setMediaLink(mediaPath);
        }
        return new ResponseEntity<>(quizService.createQuiz(quiz), HttpStatus.OK);
    }

    @RequestMapping(value = "/quiz", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Quiz> updateQuiz(@RequestPart("quiz") Quiz quiz,
                                           @RequestPart(value="file", required=false) MultipartFile file
    ) throws IOException {
        return new ResponseEntity<>(quizService.updateQuiz(quiz, file), HttpStatus.OK);
    }

    @GetMapping("/quizs")
    public ResponseEntity<List<Quiz>> getAllQuizs() {
        return new ResponseEntity<>(quizService.getAllQuizs(), HttpStatus.OK);
    }

    @DeleteMapping("/quiz/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable String id) {
        quizService.deleteQuiz(id);
        return new ResponseEntity<>("Delete success", HttpStatus.OK);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiError> handleStorageFileNotFound(RuntimeException exc) {
        exc.printStackTrace();
        ApiError error = new ApiError(exc.getMessage(), 0);
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

}
