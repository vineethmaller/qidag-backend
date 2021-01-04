const express = require('express');

const MessageService = require('./../services/message');

const messageRouter = express.Router();

messageRouter.post('/api/message/', (req, res) => {
    const message = req.body;
    MessageService.createNewMessage(message, (status, data) => {
        if (status)
            res.status(200).send({ id: data._id });
        else {
            console.error(`Unable to create message! \nError: ${data}`);
            res.status(500).send();
        }
    });
});

messageRouter.get('/api/message/:group', (req, res) => {
    const groupID = req.params.group;
    MessageService.getMessagesByGroup(groupID, (status, data) => {
        if (status)
            res.status(200).send(data);
        else {
            console.error(`Unable to fetch messages for user! \nError: ${data}`);
            res.send(500).send();
        }
    })
})

messageRouter.delete('/api/message/:message', (req, res) => {
    const messageId = req.params.message;
    MessageService.deleteMessageById(messageId, (status, data) => {
        if (status)
            res.status(200).send();
        else {
            console.error(`Unable to delete messages for given group! \nError: ${data}`);
            res.send(500).send();
        }
    })
})


module.exports = { messageRouter }