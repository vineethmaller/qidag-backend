const mongoUtil = require('./../utils/mongoUtil');

const mongoose = mongoUtil.getConnection();

const MessageSchema = new mongoose.Schema({
    groupId: String,
    senderId: String,
    senderName: String,
    message: String,
    files: [{
        name: String,
        data: String
    }],
    dateTime: Date
});

module.exports = mongoose.model('Message', MessageSchema);