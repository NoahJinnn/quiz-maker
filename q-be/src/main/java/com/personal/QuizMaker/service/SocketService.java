package com.personal.QuizMaker.service;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.DataListener;
import com.personal.QuizMaker.model.Heartbeat;
import com.personal.QuizMaker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.Instant;

@Service
public class SocketService {

    @Autowired
    private UserService userService;

    @PostConstruct
    private void init() {
        Configuration config = new Configuration();
        config.setHostname("0.0.0.0");
        config.setPort(8085);

        final SocketIOServer server = new SocketIOServer(config);
        server.addEventListener("heartbeat", Heartbeat.class, new DataListener<Heartbeat>() {
            @Override
            public void onData(SocketIOClient client, Heartbeat data, AckRequest ackRequest) {
                // broadcast messages to all clients
                User pingUser = userService.getUserMap().get(data.getUserId());
                pingUser.setHeartbeat(Instant.now());
            }
        });

        server.start();
    }
}

