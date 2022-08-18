const express = require('express')
const usersRt = express.Router()
const {check, validationResult} = require('express-validator')

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

usersRt.get('/', (req, res) => {
    res.json(users)
})

usersRt.post('/', [check('name').not().isEmpty().trim(), ], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array()})
    }
    users.push(req.body)
    res.status(200).json(req.body)
})


users

module.exports = { usersRt}