const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.get);

module.exports = router;