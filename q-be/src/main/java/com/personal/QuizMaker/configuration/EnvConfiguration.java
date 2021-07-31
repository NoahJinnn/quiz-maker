package com.personal.QuizMaker.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

@Configuration
@PropertySource("file:configs/application.properties")
public class EnvConfiguration {
    @Autowired
    Environment env;
}