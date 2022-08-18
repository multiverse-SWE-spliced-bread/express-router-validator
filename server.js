const express = require("express")
const app = express()
const {usersRt, fruitsRt} = require('./routes')
const port = 3000


app.use(express.json())
app.use('/users', usersRt)
app.use('/fruits', fruitsRt)



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})