const express = require('express')

const UserService = require('./../services/user')

const userRouter = express.Router()

userRouter.get('/api/users/:user', (req, res) => {
    const username = req.params.user
    UserService.getUserByName(username, (status, data) => {
        if (status)
            res.status(200).send(data)
        else
            res.status(404).send()
    })
})

userRouter.post('/api/users/', (req, res) => {
    const user = req.body
    UserService.createNewUser(user, (status, data) => {
        if (status)
            res.status(201).send({ id: data._id })
        else
            res.status(406).send()
    })
})

userRouter.put('/api/users/', (req, res) => {
    const user = req.body
    UserService.updateUser(user, (status, data) => {
        if (status)
            res.status(201).send(data)
        else
            res.status(406).send()
    })
})

module.exports = userRouter