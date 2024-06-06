const { Note } = require('../models');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).send('Note not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.update(req.body);
      res.json(note);
    } else {
      res.status(404).send('Note not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Note not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
