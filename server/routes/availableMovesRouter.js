const Router = require('express');
const router = new Router();
const availableMovesController = require('../controllers/availableMovesController');

router.post('/', availableMovesController.create);
router.get('/', availableMovesController.getAll);

module.exports = router;