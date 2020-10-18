let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let recordSchema = new Schema({
    date: { type: Date, default: Date.now },
    subjects: { type: String, default: null },
    readingLog: { type: String, default: null },
    notes: { type: String, default: 'type notes here' },
}, {
    timestamps: true
});


let studentSchema = new Schema({
    name: { type: String, required: true },
    grade: { type: String, default: null },
    record: [recordSchema],
    userID: { type: Schema.Types.ObjectId, ref: "User" }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Student', studentSchema);