// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const goalSchema = new mongoose.Schema({
    dueDate: Date,
    type: String,
    text: String,
    checked: Boolean
});

module.exports = mongoose.model('Goal', goalSchema);