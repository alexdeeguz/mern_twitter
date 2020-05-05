const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const users = require('./routes/api/users')
const tweets = require('./routes/api/tweets')
const User = require('./models/User')


mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(error => console.log(error))

app.get('/', (req, res) => {
    const user = new User({
        handle: "alex",
        email: "alex@gmail.com",
        password: "food"
    })
    user.save()
    res.send('hello world')
})

app.use('/api/users', users)
app.use('/api/tweets', tweets)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})