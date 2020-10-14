const Student = require('../models/student');


module.exports = {
    create,
};

async function create(req, res) {
     await Student.findById(req.params.id, function (student) {
        req.body.user = req.user._id;
        student.records.push(req.body);
     });
     res.status(200).json();
};
