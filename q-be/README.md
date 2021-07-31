**Quiz apis:**
- [GET] /quizs: Return quiz list
- [POST] /quiz: Create quiz (multipart/form-data + application/json)
- [UPDATE] /quiz: Update quiz (multipart/form-data + application/json)
- [DELETE] /quiz/{id}: Delete quiz

**User apis:**
- [GET] /users: Return user list
- [GEt] /user/{id}: Return user by id
- [POST] /user: Create user
- [SOCKET]: 
    + Event: heartbeat
    + Message: { userId: <id> }
