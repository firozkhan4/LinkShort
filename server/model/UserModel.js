const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },

    Id: {
        type: String,
        required: true,
        unique: true,
    },

    Email:{
        type: String,
        required: true,
        unique: true,
    },

    Password:{
        type: String,
        required: true,
    }

    
}, {timestamps: true});


const User = mongoose.model('user',userSchema);

module.exports = User;