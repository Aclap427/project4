let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: { type: String, required: true},
    grade: { type: String },
    record: [recordSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);