package com.personal.QuizMaker;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfiguration {
    @Autowired
    Environment env;

    private static final String prefix = "mongodb";

    private String getEnvVariable(String variable){
        return env.getProperty(String.format("%s.%s", prefix, variable));
    }

    public String getHost(){
        return getEnvVariable("host");
    }

    public String getPort(){
        return getEnvVariable("port");
    }

    public String getUsername(){
        return getEnvVariable("username");
    }

    public String getPassword(){
        return getEnvVariable("password");
    }

    public String getDatabase() { return getEnvVariable("database"); }

    public String getConnectionString(){
        return String.format("mongodb://%s:%s", getUsername(), getPassword(), getHost(), getPort());
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        MongoClient mongoClient = MongoClients.create(getConnectionString());
        return new MongoTemplate(mongoClient, getDatabase());
    }
}
