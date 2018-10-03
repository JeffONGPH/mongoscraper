// dependencies
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

// create Schema class
const Schema = mongoose.Schema;

// create note schema
const NoteSchema = new Schema({
 
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


NoteSchema.plugin(uniqueValidator);

const Note = mongoose.model("Note", NoteSchema);


module.exports = Note;
