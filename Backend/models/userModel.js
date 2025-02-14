const mongoose = require('mongoose');
const bcryptjs = require ('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    
});
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcryptjs.compare(candidatePassword, userPassword);
}

userSchema.methods.changePasswordAfter = async function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            0
        );
        return JWTTimestamp < changedTimestamp;
    }
    return false;
}
const User = mongoose.model('User', userSchema);

module.exports = User;