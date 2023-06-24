// NPM PACKAGES
const bcrypt = require('bcryptjs'),
  dayjs = require('dayjs'),
  jwt = require('jsonwebtoken');

// DATABASE
const db = require('../models/db');

// READ
exports.getUser = async (req, res) => {
  await db.User.findById(req.user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

exports.getUserById = async (req, res) => {
  await db.User.findById({ _id: req.params.id })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
    });
};

exports.register = async (req, res) => {
  // has the password
  const password = await bcrypt.hash(req.body.password, 10);

  // create user in database
  const user = await db.User.create({
    birthday: req.body.birthday,
    role: req.body.role,
    familyID: Math.floor(Math.random() * 90000) + 10000,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    country: req.body.country.value,
    startDate: req.body.startDate,
    endDate: dayjs(req.body.startDate).add(1, 'years').toDate(),
    email: req.body.email.toLowerCase(),
    password: password,
    permissions: {
      shareBirthday: false,
      shareEmail: false,
      shareLastName: false,
    },
  });

  // create cookie for user
  const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });

  // create empty payment entries for the whole year
  const createPaymentEntries = () => {
    return Array(52).fill({
      paid: false,
      date: null,
      late: false,
    }).map((entry, i) => ({...entry, week: i + 1}));
  };

  db.Payment.insertMany(createPaymentEntries())
    .then(insertedPayment => {
      const paymentIds = insertedPayment.map((payment) => payment._id);
      db.User.findByIdAndUpdate(
        { _id: user._id },
        { $push: { payments: paymentIds } },
        (err, success) => {
          if (err) {
            console.log('Error: ' + err);
          }
        }
      );
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  res.json(user);
};

exports.login = async (req, res) => {
  const user = await db.User.findOne({ email: req.body.email });
  if (!user) {
    res.json({ message: 'No User found.' });
    return;
  }
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    res.json({ message: 'Entered e-mail and password do not match!' });
    return;
  }
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  res.json(user);
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json('User is signed out.');
};

// UPDATE
exports.update = async (req, res) => {
  await db.User.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedUser => {
      res.status(200).json(updatedUser);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
exports.delete = async (req, res) => {
  await db.User.findByIdAndRemove(req.params.id)
    .then(deletedUser => {
      res.status(200).json({ message: 'User has been deleted successfully!' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
