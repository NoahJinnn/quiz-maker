package com.personal.QuizMaker.service;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;
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
    private SocketIOServer server;

    @PostConstruct
    private void init() {
        Configuration config = new Configuration();
        config.setHostname("0.0.0.0");
        config.setPort(8085);
        SocketConfig socketConfig = new SocketConfig();
        socketConfig.setReuseAddress(true);
        config.setSocketConfig(socketConfig);
        server = new SocketIOServer(config);

        server.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient socketIOClient) {
                System.out.println(socketIOClient.getRemoteAddress().toString());
            }
        });

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

    public void sendMsg(Object user) {
        for (SocketIOClient client : server.getAllClients()) {
            client.sendEvent("update-user", user);
        }
    }

}

