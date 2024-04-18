const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({

    shortURL:{
        type: String,
        required: true,
        unique: true,
    },

    redirectURL: {
        type: String,
        required: true,
    },

    visitedCount:{
        type: Number,
        default: 0,
    },

    urlCreated: {
        type: Date,
        default: Date.now(),
    }

},{timestamps: true});

const URL = mongoose.model('url',urlSchema );

module.exports = URL;