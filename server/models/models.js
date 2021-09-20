const sequelize = require('../models/index');
const DataTypes = require('sequelize');

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
});

const Game = sequelize.define("game", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
});

const Step = sequelize.define("step", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const availableMove = sequelize.define("availableMove", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

User.hasMany(Game);
Game.belongsTo(User);

Game.hasMany(Step);
Step.belongsTo(Game);

Game.hasMany(availableMove);
availableMove.belongsTo(Game);

module.exports = {
    User,
    Game,
    Step,
    availableMove
}

