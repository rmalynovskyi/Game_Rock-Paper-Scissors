const Router = require('express');
const router = new Router();
const stepController = require('../controllers/stepController');

router.post('/', stepController.create);
router.get('/', stepController.getAll);

module.exports = router;