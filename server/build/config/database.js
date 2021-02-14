require("dotenv").config();
var Sequelize = require("sequelize");
var _a = process.env, database = _a.database, username = _a.username, password = _a.password;
var sequelize = new Sequelize(database, username, password, {
    dialect: "sqlite",
    storage: "db.sqlite",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
exports.sequelize = sequelize;
