require("dotenv").config();
const Sequelize = require("sequelize");
const { database, username, password } = process.env;

const sequelize = new Sequelize(database, username, password, {
  dialect: "sqlite",
  storage: "db.sqlite",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});


exports.sequelize = sequelize;
