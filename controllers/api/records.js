
const Student = require('../models/student');


module.exports = {
    create: createRecord,
    delete: deleteRecord,
};

function deleteRecord(req, res) {
    Student.findOne({ 'records._id': req.params.id }, function (err, student) {
        const recordSubdoc = student.records.id(req.params.id);
        recordSubdoc.remove();
        student.save(function (err) {
            res.redirect('/records');
        })
    })
}

function createRecord(req, res) {
    Student.findById(req.params.id, function (err, student) {
        req.body.student = req.user._id;
        student.records.push(req.body);
        student.save(function (err) {
            res.redirect('/records')
        });
    });
}
