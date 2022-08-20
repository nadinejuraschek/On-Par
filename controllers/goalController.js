// DATABASE
const db = require('../models/db');

// READ
exports.getGoals = async (req, res) => {
  await db.User.findById(req.user)
    .populate('goals')
    .then(goals => {
      res.status(200).json(goals);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

exports.getSingleGoal = async (req, res) => {
  await db.Goal.findById(req.params.goalId)
    .then(goal => {
      res.status(200).json(goal);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
exports.create = async (req, res) => {
  await db.Goal.create(req.body)
    .then(insertedGoal => {
      db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { goals: insertedGoal._id } },
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
  await db.Goal.findByIdAndUpdate(req.params.goalid, req.body)
    .then(updatedGoal => {
      res.status(200).json(updatedGoal);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
exports.delete = async (req, res) => {
  await db.Goal.findByIdAndRemove(req.params.goalid)
    .then(deletedGoal => {
      res.status(200).json({ message: 'Goal has been deleted successfully!' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
