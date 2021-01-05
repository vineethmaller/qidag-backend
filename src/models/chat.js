const mongoUtil = require('./../utils/mongoUtil')

const mongoose = mongoUtil.getConnection()

const ChatSchema = new mongoose.Schema({
    name: String,
    isGroup: Boolean,
    status: String,
    imageURL: String,
    users: [ String ]
})

module.exports = mongoose.model('chats', ChatSchema)