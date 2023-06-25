// NPM PACKAGES
const   mongoose = require('mongoose');

// SCHEMA SETUP
const paymentSchema = new mongoose.Schema({
    week: Number,
    paid: Boolean,
    date: Date,
    late: Boolean
});

module.exports = mongoose.model('Payment', paymentSchema);