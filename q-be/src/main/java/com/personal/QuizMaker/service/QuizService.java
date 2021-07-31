package com.personal.QuizMaker.service;

import com.personal.QuizMaker.model.Quiz;
import com.personal.QuizMaker.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class QuizService {
    private final QuizRepository quizRepository;

    @Autowired
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizs() {
        return quizRepository.findAll();
    }

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public String saveUploadedFile(MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {
            byte[] bytes = file.getBytes();
            Path path = Paths.get("/home/nguyen/Desktop/" + file.getOriginalFilename());
            Files.write(path, bytes);
            return path.toString();
        }
        return "";
    }

    public void deleteQuiz(String id) {
        quizRepository.deleteById(id);
    }
}
