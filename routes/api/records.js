let express = require('express');
let router = express.Router();
let recordsCtrl = require('../../controllers/api/records');

router.get('/', recordsCtrl.index);
router.get('/:id', recordsCtrl.show);
router.post('/', recordsCtrl.create);
router.delete('/:id', recordsCtrl.delete);
router.put('/:id', recordsCtrl.update);

module.exports = router;