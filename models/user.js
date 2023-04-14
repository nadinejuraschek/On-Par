// NPM PACKAGES
const mongoose = require('mongoose');
  // fs = require('fs'),
  // multer = require('multer');

// SCHEMA SETUP
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,

  firstname: String,
  lastname: String,
  role: String,
  country: String,

  familyID: String,

  startDate: Object,
  endDate: Object,

  workhours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workhour' }],
  payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goal' }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],

  profileImage: { img: { data: Buffer, contentType: String } },

  contact: {
    phone: {
      type: Number
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    snapchat: {
      type: String
    }
  },

  birthday: Object,

  location: String,
});

module.exports = mongoose.model('User', userSchema);
