var Sequelize = require("sequelize");
var db = require("./database");
var User = db.define("user", {
    id: {
        type: Sequelize.TINYINT
    },
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    }
});
module.exports = User;
