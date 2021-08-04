package com.personal.QuizMaker.service;

import com.personal.QuizMaker.model.Quiz;
import com.personal.QuizMaker.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class QuizService {
    private final QuizRepository quizRepository;

    @Autowired
    Environment env;

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

    public Quiz updateQuiz(Quiz quiz, MultipartFile file) throws IOException {
        if (file != null) {
            String mediaPath = saveUploadedFile(file);
            quiz.setMediaLink(mediaPath);
            return quizRepository.save(quiz);
        }
        return quizRepository.save(quiz);
    }

    public String saveUploadedFile(MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {

            String basePath = env.getProperty("storage.path");
            String path = basePath + file.getOriginalFilename();
            InputStream is = file.getInputStream();

            Files.copy(is, Paths.get(path),
                    StandardCopyOption.REPLACE_EXISTING);


            return "/images/" + file.getOriginalFilename();
        }
        return "";
    }

    public void deleteQuiz(String id) {
        quizRepository.deleteById(id);
    }
}
