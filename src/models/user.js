const MongoUtil = require('./../utils/mongoUtil')

const mongoose = MongoUtil.getConnection()

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 15,
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 7,
        maxlength: 100
    },
    password: {
        hash: {
            type: String
        },
        salt: {
            type: String
        }
    },
    status: {
        type: String,
        maxlength: 150
    },
    imageURL: String
})

module.exports = mongoose.model('users', UserSchema)