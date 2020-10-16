
const Student = require('../models/student');


module.exports = {
    addRecord,
    delete: deleteRecord,
};

function deleteRecord(req, res) {
    Student.findOne({ 'records._id': req.params.id }, function (err, student) {
        const recordSubdoc = student.records.id(req.params.id);
        recordSubdoc.remove();
        student.save(function (err) {
            res.redirect(`/students/${student._id}`);
        })
    })
}

function addRecord(req, res) {
    student.findById(req.params.id, function (err, student) {
        student.records.push(req.body);
        student.save(function (err) {
            res.redirect(`/students/${req.params.id}`)
        });
    });
}
