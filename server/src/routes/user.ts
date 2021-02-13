const express = require("express");
const router = express.Router();
const validators = require("../utils/validators");

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
router.get(`/`, (req, res) => {
  function getAllUsers() {
    res.send(users);
  }

  getAllUsers();
});

router.get(`/:id`, (req, res) => {
  function getUser(id) {
    const selectedUser = users.filter((user) => user.id == id)[0];
    res.send(selectedUser);
  }

  getUser(req.params.id);
});

router.patch(`/:id`, (req, res) => {
  function updateUser(id, name, address) {
    const existUser = users.find((user) => user.id == id);
    if (!existUser) {
      res.status(400).send(`user is not exist`);
      return;
    }
    existUser.name = name;
    existUser.address = address;
    res.send(existUser);
  }

  updateUser(req.params.id, req.body.name, req.body.address);
});

router.post(`/`, (req, res) => {
  function addUser(name, address) {
    if (!validators.isValidUser(req)) {
      res.send(`invalid details`);
      return;
    }
    const user = {
      id: users.length + 1,
      name,
      address,
    };
    users.push(user);
    res.send(user);
  }

  addUser(req.body.name, req.body.address);
});

router.delete(`/:id`, (req, res) => {
  function deleteUser(id) {
    let newUsers = [];
    let userToDelete;
    users.forEach((user) => {
      if (user.id != id) newUsers.push(user);
      else userToDelete = user;
    });
    users = newUsers;
    res.send(userToDelete);
  }

  deleteUser(req.params.id);
});

router.delete(`/`, (req, res) => {
  function deleteLastUser() {
    const lastUser = users[users.length - 1];
    res.send(lastUser);
    users.pop();
  }

  deleteLastUser();
});

module.exports = router;
