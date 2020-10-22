let express = require('express');
let router = express.Router();
let studentsCtrl = require('../../controllers/api/students');

router.use(require('../../config/auth'));

router.get('/', studentsCtrl.index);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.delete);
router.put('/:id', studentsCtrl.update);


module.exports = router;