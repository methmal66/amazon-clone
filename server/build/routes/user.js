"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var validators = require("../utils/validators");
var users = [
    {
        id: 1,
        name: "sanuja",
        address: "kalaeliya"
    },
    {
        id: 2,
        name: "amal",
        address: "wattala"
    },
    {
        id: 3,
        name: "kamal",
        address: "nigambo"
    },
];
router.get("/", function (res) {
    function getAllUsers() {
        res.send(users);
    }
    getAllUsers();
});
router.get("/:id", function (req, res) {
    function getUser(id) {
        var selectedUser = users.filter(function (user) { return user.id == id; })[0];
        res.send(selectedUser);
    }
    getUser(parseInt(req.params.id));
});
router.patch("/:id", function (req, res) {
    function updateUser(user) {
        var existUser = users.find(function (eachUser) { return eachUser.id == user.id; });
        if (!existUser) {
            res.status(400).send("user is not exist");
            return;
        }
        existUser.name = user.name;
        existUser.address = user.address;
        res.send(existUser);
    }
    var idOfUpdatingUser = parseInt(req.params.id);
    var newUser = {
        id: idOfUpdatingUser,
        name: req.body.name,
        address: req.body.address
    };
    updateUser(newUser);
});
router.post("/", function (req, res) {
    function addUser(user) {
        if (!validators.isValidUser(req)) {
            res.send("invalid details");
            return;
        }
        users.push(user);
        res.send(user);
    }
    var newUser = {
        id: users.length + 1,
        name: req.body.name,
        address: req.body.address
    };
    addUser(newUser);
});
router["delete"]("/:id", function (req, res) {
    function deleteUser(id) {
        var newUsers = [];
        var userToDelete;
        users.forEach(function (user) {
            if (user.id != id) {
                newUsers.push(user);
                return;
            }
            userToDelete = user;
        });
        users = newUsers;
        res.send(userToDelete);
    }
    var idOfDeletingUser = parseInt(req.params.id);
    deleteUser(idOfDeletingUser);
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
