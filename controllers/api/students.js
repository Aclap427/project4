//const { deleteOne } = require('../../models/student');
const Student = require('../../models/student');

module.exports = {
    index,
    show,
    create,
    delete: deleteOneStudent,
    update
};

async function index(req, res) {
    const students = await Student.find({ user: req.user._id});
    res.status(200).json(students);
}

async function show(req, res) {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
}

async function create(req, res) {
    const student = await Student.create(req.body);
    res.status(201).json(student);
}

async function deleteOneStudent(req, res) {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedStudent);
}

async function update(req, res) {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
}