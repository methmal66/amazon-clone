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
router.get("/", function (req, res) {
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
    getUser(req.params.id);
});
router.patch("/:id", function (req, res) {
    function updateUser(id, name, address) {
        var existUser = users.find(function (user) { return user.id == id; });
        if (!existUser) {
            res.status(400).send("user is not exist");
            return;
        }
        existUser.name = name;
        existUser.address = address;
        res.send(existUser);
    }
    updateUser(req.params.id, req.body.name, req.body.address);
});
router.post("/", function (req, res) {
    function addUser(name, address) {
        if (!validators.isValidUser(req)) {
            res.send("invalid details");
            return;
        }
        var user = {
            id: users.length + 1,
            name: name,
            address: address
        };
        users.push(user);
        res.send(user);
    }
    addUser(req.body.name, req.body.address);
});
router["delete"]("/:id", function (req, res) {
    function deleteUser(id) {
        var newUsers = [];
        var userToDelete;
        users.forEach(function (user) {
            if (user.id != id)
                newUsers.push(user);
            else
                userToDelete = user;
        });
        users = newUsers;
        res.send(userToDelete);
    }
    deleteUser(req.params.id);
});
router["delete"]("/", function (req, res) {
    function deleteLastUser() {
        var lastUser = users[users.length - 1];
        res.send(lastUser);
        users.pop();
    }
    deleteLastUser();
});
module.exports = router;
