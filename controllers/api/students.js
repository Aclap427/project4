const Student = require('../../models/student');

module.exports = {
    index,
    //show,
    create,
    delete: deleteOne,
    update,
  
};

async function index(req, res) {
    const student = await Student.find({ userID: req.user._id });
    res.status(200).json(student);
}

// async function show(req, res) {
//     try {
//         req.body.user = req.user._id
//         const student = await Student.findById(req.params.id);
//         res.status(200).json(student);
//     } catch (err) {
//         res.json({ err });
//     }
// }

async function create(req, res) {
    console.log(req.user)
    try {
        req.body.userID = req.user._id
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedStudent);
}

async function update(req, res) {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
}

