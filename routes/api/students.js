let express = require('express');
let router = express.Router();
let studentsCtrl = require('../../controllers/api/students');

router.use(require('../../config/auth'));
router.get('/', checkAuth, studentsCtrl.index);
router.get('/:id', studentsCtrl.show);
router.post('/', checkAuth, studentsCtrl.create);
router.delete('/:id', studentsCtrl.delete);
router.put('/:id', studentsCtrl.update);

/*---------- Protected Routes ----------*/


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;