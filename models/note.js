// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const notesSchema = new mongoose.Schema({
    date: String,
    text: String,
    title: String,
});

module.exports = mongoose.model('Note', notesSchema);