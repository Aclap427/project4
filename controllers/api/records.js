const { deleteOne } = require('../../models/record');
const Record = require('../../models/record');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update

};

async function index(req, res) {
    const records = await Record.find({});
    res.status(200).json(records);
}

async function show(req, res) {
    const record = await Record.findById(req.params.id);
    res.status(200).json(record);
}

async function create(req, res) {
    const record = await Record.create(req.body);
    res.status(201).json(record);
}

async function deleteOne(req, res) {
    const deletedRecord = await Record.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedRecord);
}

async function update(req, res) {
    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedRecord);
}