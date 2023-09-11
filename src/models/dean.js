const mongoose = require('mongoose');

const deanSchema = new mongoose.Schema({
  universityId: String,
  password: String,
  token: String,
});

module.exports = mongoose.model('Dean', deanSchema);
