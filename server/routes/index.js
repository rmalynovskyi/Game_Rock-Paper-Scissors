const Router = require('express');
const router = new Router();
const userRouter = require("../routes/userRouter");
const gameRouter = require("../routes/gameRouter");
const stepRouter = require("../routes/stepRouter");
const availableMoves = require("../routes/availableMovesRouter")

router.use('/users', userRouter);
router.use('/games', gameRouter);
router.use('/steps', stepRouter);
router.use('/availableMoves', availableMoves);

module.exports = router;