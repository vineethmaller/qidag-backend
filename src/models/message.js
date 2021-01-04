const mongoUtil = require('./../utils/mongoUtil');

const mongoose = mongoUtil.getConnection();

const MessageSchema = new mongoose.Schema({
    message: {
        groupName: String,
        senderId: String,
        senderName: String,
        message: String,
        files: [{
            name: String,
            data: Buffer
        }],
        dateTime: Date
    }
});

module.exports = mongoose.model('Message', MessageSchema);