let express = require('express');
let router = express.Router();
let studentsCtrl = require('../../controllers/api/students');

router.get('/', studentsCtrl.index);
router.get('/:id', studentsCtrl.show);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.delete);
router.put('/:id', studentsCtrl.update);

module.exports = router;