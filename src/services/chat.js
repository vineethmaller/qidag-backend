const ChatSchema = require('./../models/chat')

function ChatService() {}

ChatService.prototype = {

    createNewChat: async (chat, callback) => {
        ChatSchema.create(chat, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    getChatByUser: async (userID, callback) => {
        ChatSchema.find({ users: userID }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },
    
    deleteChatById: async (groupId, callback) => {
        ChatSchema.remove({ _id: groupId }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    }
}

module.exports = new ChatService()