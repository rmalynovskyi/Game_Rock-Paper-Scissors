const express = require("express");
const cors = require("cors");
const models = require("./models/models");
const sequelize = require("./models/index");
const router = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(3001, () => {
            console.log("Server is running on port 3001");
        });
    } catch (e) {
        console.log(e);
    }
}

start().then();
