const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    username: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('User', UserSchema);