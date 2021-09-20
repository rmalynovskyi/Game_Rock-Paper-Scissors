const {Step} = require('../models/models');

class StepController {

    async create(req, res) {
        const {name, gameId} = req.body;
        await Step.create({name, gameId}).then(function (result) {
            return res.json(result);
        }).catch(function (error) {
            return res.json(error)
        });
    }

    async getAll(req, res) {
        const {gameId} = req.query;
        let steps;
        if (!gameId) {
            steps = await Step.findAll();
        } else {
            steps = await Step.findAll({where: {gameId}});
        }
        return res.json(steps);
    }
}

module.exports = new StepController();