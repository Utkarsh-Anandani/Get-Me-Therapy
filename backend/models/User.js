const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const userSchema = new Schema({
    username: {type: 'String', required: true},
    email: {type: 'String', required: true},
    password: {type: 'String', required: true}
})

const userModel = model("User", userSchema);
module.exports = userModel;