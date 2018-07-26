const mongoose = require('mongoose');
mongoose.connect("mongodb://users:users@ds113870.mlab.com:13870/nickiscool")

const userSchema = mongoose.Schema({
    username:String,
    password: String,
    alias: String
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;