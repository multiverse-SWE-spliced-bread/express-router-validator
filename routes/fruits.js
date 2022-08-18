const express = require('express')
const fruitsRt = express.Router()



let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]


fruitsRt.get('/', (req, res) => {
    res.json(fruits)
})


module.exports = { fruitsRt}
