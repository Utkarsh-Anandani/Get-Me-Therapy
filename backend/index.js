const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const User = require('./models/User')

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))

const salt = bcrypt.genSaltSync(10);
const secret = "ajhhdueujjwjdjncnejjiwijdnsnnd";

mongoose.connect('mongodb+srv://Utkarsh:bpmPym7M8FTDPZUB@cluster0.20b9zla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            email,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    } catch (error) {
        res.status(400).json(error)
    }
})


app.post('/login', async (req, res) => {
    const { password, email } = req.body;
    const userDoc = await User.findOne({email: email});
    if (!userDoc) {
        res.status(400).json('User not found')
    }
    else {
        console.log(userDoc);
        const passOK = bcrypt.compareSync(password, userDoc.password)
        if (passOK) {
                jwt.sign({ username: userDoc.username, id: userDoc._id }, secret, {}, (err, token) => {
                    res.cookie('token', token).json({
                        id: userDoc._id,
                        username: userDoc.username,
                    })
                });
        }
        else {
            res.status(400).json("Invalid Credentials");
        }
    }
})


app.get('/', (req, res) => {
    res.send('homepage');
})

app.listen(3000);

//FoMEBGg0BB8BauIJ