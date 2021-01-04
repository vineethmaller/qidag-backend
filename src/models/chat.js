const mongoUtil = require('./../utils/mongoUtil');

const mongoose = mongoUtil.getConnection();

const ChatSchema = new mongoose.Schema({
    groupName: String,
    status: String,
    image: {
        name: String,
        data: String
    },
    users: [ String ]
});

module.exports = mongoose.model('ChatSchema', ChatSchema);