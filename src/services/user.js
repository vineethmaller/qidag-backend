const UserSchema = require('./../models/user')

function UserService() {
}

UserService.prototype = {

    createNewUser: async (user, callback) => {
        UserSchema.create(user, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    getUserById: async (userId, callback) => {
        UserSchema.findOne({ _id: userId }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    getUserByName: async (userName, callback) => {
        UserSchema.findOne({ username: userName }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    getUserByEmail: async (email, callback) => {
        UserSchema.findOne({ email: email }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    deleteUserByName: async (userName, callback) => {
        UserSchema.remove({ username: userName }, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    },

    updateUser: async (user, callback) => {
        UserSchema.updateOne({ username: user.username }, user, (err, data) => {
            if (err)
                callback(false, err)
            callback(true, data)
        })
    }
}

module.exports = new UserService()