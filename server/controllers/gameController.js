const {Game} = require('../models/models');

class GameController {

    async create(req, res) {
        const {name, userId} = req.body;
        const game = await Game.create({name, userId});
        return res.json(game);
    }

    async getAll(req, res) {
        const {userId} = req.query
        let games
        if (!userId) {
            games = await Game.findAll();
        } else {
            games = await Game.findAll({where: {userId}})
        }
        return res.json(games);
    }
}

module.exports = new GameController();