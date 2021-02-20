"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var users = [
    {
        name: "sanuja",
        address: "kalaeliya"
    },
    {
        name: "amal",
        address: "wattala"
    },
    {
        name: "kamal",
        address: "nigambo"
    },
];
router.get("/", function (req, res) {
    function getAllUsers() {
        res.send(users);
    }
    getAllUsers();
});
router.get("/:id", function (req, res) {
    function getUser(id) {
        var selectedUser = users[id];
        res.send(selectedUser);
    }
    getUser(parseInt(req.params.id));
});
router.patch("/:id", function (req, res) {
    function updateUser(id, user) {
        if (users.length <= id) {
            res.status(400).send("user is not exist");
            return;
        }
        res.send(user);
    }
    var idOfUpdatingUser = parseInt(req.params.id);
    var newUser = {
        name: req.body.name,
        address: req.body.address
    };
    updateUser(idOfUpdatingUser, newUser);
});
router.post("/", function (req, res) {
    function addUser(name, address) {
        if (name && address) {
            var user = {
                name: name,
                address: address
            };
            users.push(user);
            res.send(user);
            return;
        }
        res.send("Cannot add user. User is invalid");
        return;
    }
    var _a = req.body, name = _a.name, address = _a.address;
    addUser(name, address);
});
router["delete"]("/", function (req, res) {
    function deleteLastUser() {
        if (users.length !== 0) {
            var lastUser = users[users.length - 1];
            res.send(lastUser);
            users.pop();
            return;
        }
        res.send("Cannot delete user. There are no user left to delete");
    }
    deleteLastUser();
});
module.exports = router;
