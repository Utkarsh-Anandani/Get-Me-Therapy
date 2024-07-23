const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const userSchema = new Schema({
    username: {type: 'String', required: true, unique: true},
    email: {type: 'String', required: true},
    password: {type: 'String', required: true, min: 3}
})

const userModel = model("User", userSchema);
module.exports = userModel;