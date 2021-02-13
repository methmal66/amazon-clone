const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("user", {
  id: {
    type: Sequelize.TINYINT,
  },
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
