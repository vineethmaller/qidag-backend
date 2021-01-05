const MessageSchema = require('./../models/message')

function MessageService() {}

MessageService.prototype = {

    createNewMessage: async (message, callback) => {
        MessageSchema.create(message, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    getMessagesByGroup: async (groupID, callback) => {
        MessageSchema.find({ groupId: groupID }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    deleteMessageById: async (messageId, callback) => {
        MessageSchema.remove({ _id: messageId }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },
    
    deleteMessageByGroupId: async (groupID, callback) => {
        MessageSchema.remove({ groupId: groupID }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    }
}

module.exports = new MessageService()