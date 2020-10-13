let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let recordSchema = new Schema({
    date: { type: Date, required: true},
    subjects: { type: String },
    readingLog: { type: String },
    notes: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Record', recordSchema);