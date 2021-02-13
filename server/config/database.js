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

let users = [
  {
    id: 1,
    name: `sanuja`,
    address: `kalaeliya`,
  },
  {
    id: 2,
    name: `amal`,
    address: `wattala`,
  },
  {
    id: 3,
    name: `kamal`,
    address: `nigambo`,
  },
];

exports.users = users;
exports.sequelize = sequelize;
