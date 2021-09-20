const {User} = require('../models/models');

class UserController {

    async login(req, res) {
        const {name} = req.body;
        const userDb = await User.findOne({where: {name}});
        if (!userDb) {
            const user = await User.create({name});
            return res.json(user);
        } else {
            return res.json(userDb);
        }
    }

    async getAll(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }

    async get(req, res) {
        const {id} = req.params;
        const user = await User.findOne({
            where: {id}
        })
        return res.json(user);
    }
}

module.exports = new UserController();