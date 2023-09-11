const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  universityId: String,
  password: String,
  token: String,
});

module.exports = mongoose.model('Student', studentSchema);
