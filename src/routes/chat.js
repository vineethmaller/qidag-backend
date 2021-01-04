const express = require('express');

const ChatService = require('./../services/chat');

const chatRouter = express.Router();

chatRouter.post('/api/chat/', (req, res) => {
    const chat = req.body;
    ChatService.createNewChat(chat, (status, data) => {
        if (status)
            res.status(200).send(data);
        else {
            console.error(`Unable to create chat! \nError: ${data}`);
            res.status(500).send();
        }
    });
});

chatRouter.get('/api/chat/:user', (req, res) => {
    const userID = req.params.user;
    ChatService.getChatByUser(userID, (status, data) => {
        if (status)
            res.status(200).send(data);
        else{
            console.error(`Unable to fetch chats for user! \nError: ${data}`);
            res.send(500).send();
        }
    })
})

module.exports = { chatRouter }