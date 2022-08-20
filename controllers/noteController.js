// DATABASE
const db = require('../models/db');

// READ
exports.getNotes = async (req, res) => {
  await db.User.findById(req.user)
    .populate('notes')
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

exports.getSingleNote = async (req, res) => {
  await db.Note.findById(req.params.noteid)
    .then(note => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
exports.create = async (req, res) => {
  await db.Note.create(req.body)
    .then(insertedNote => {
      db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { notes: insertedNote._id } },
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
  await db.Note.findByIdAndUpdate(req.params.noteid, req.body)
    .then(updatedNote => {
      res.status(200).json(updatedNote);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
exports.delete = async (req, res) => {
  await db.Note.findByIdAndRemove(req.params.noteid)
    .then(deletedNote => {
      res.status(200).json({ message: "Note has been deleted successfully!"});
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    })
};
