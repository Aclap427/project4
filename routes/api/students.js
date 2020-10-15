let express = require('express');
let router = express.Router();
let studentsCtrl = require('../../controllers/api/students');

router.use(require('../../config/auth'));
router.get('/', studentsCtrl.index);
router.get('/:id', studentsCtrl.show);
router.post('/', studentsCtrl.create);
router.delete('/:id', checkAuth, studentsCtrl.delete);
router.put('/:id', checkAuth, studentsCtrl.update);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, studentsCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;