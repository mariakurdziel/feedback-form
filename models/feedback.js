const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedbacks', FeedbackSchema);
