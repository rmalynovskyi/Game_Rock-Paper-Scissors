const {availableMove} = require('../models/models');

class AvailableMovesController {

    async create(req, res) {
        const {name, gameId} = req.body;
        const game = await availableMove.create({name, gameId});
        return res.json(game);
    }

    async getAll(req, res) {
        const {gameId} = req.query
        let availableMoves;
        if (!gameId) {
            res.json("Id is not specified!")
        } else {
            availableMoves = await availableMove.findAll({where: {gameId}})
        }
        return res.json(availableMoves);
    }
}

module.exports = new AvailableMovesController();