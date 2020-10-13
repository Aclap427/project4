let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: { type: String },
    grade: { type: String },
    record: [recordSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);