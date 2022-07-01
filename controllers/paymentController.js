// DATABASE
const db = require('../models/db');

// READ
exports.getPayments = async (req, res) => {
  await db.User.findById(req.user)
    .populate('payments')
    .then(payments => {
      res.status(200).json(payments);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
exports.create = async (req, res) => {
  await db.Payment.create(req.body)
    .then(insertedPayment => {
      db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { payments: insertedPayment._id } },
        (error, success) => {
          if (error) {
            console.log('Error: ' + error);
          } else {
            res.json('Success!');
          }
        }
      );
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// UPDATE
exports.update = async (req, res) => {
  await db.Payment.findByIdAndUpdate(req.params.paymentid, req.body)
    .then(updatedPayment => {
      res.status(200).json(updatedPayment);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
exports.delete = async (req, res) => {
  await db.Payment.findByIdAndRemove(req.params.paymentid)
    .then(deletedPayment => {
      res
        .status(200)
        .json({ message: 'Payment has been deleted successfully!' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
