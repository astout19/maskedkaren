var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requiredString = {
    type: String, 
    requires: true,
};

const requiredNumber = {
    type: Number,
    required: true,
};

const logEntrySchema = new Schema({
    title: requiredString,
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
    latitude: requiredNumber,
    longitude: requiredNumber,
}, {
    timestamps: true,
});