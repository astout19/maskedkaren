const mongoose = require('mongoose');

const { Schema } = mongoose;

// eslint-disable-next-line no-unused-vars
const requiredString = {
  type: String,
  requires: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Description: String,
  author: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: [0, 'Following current County protocols'],
    max: [3, 'Not following current County protocols'],
    default: 0,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  visitDate: {
    require: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
