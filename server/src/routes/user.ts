import express = require("express");
const router = express.Router();
interface User {
  id: number;
  name: string;
  address: string;
}

let users: Array<User> = [
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

router.get(`/`, (req: express.Request, res: express.Response): void => {
  function getAllUsers(): void {
    res.send(users);
  }

  getAllUsers();
});

router.get(`/:id`, (req: express.Request, res: express.Response): void => {
  function getUser(id: number): void {
    const selectedUser: User = users.filter((user) => user.id == id)[0];
    res.send(selectedUser);
  }

  getUser(parseInt(req.params.id));
});

router.patch(`/:id`, (req: express.Request, res: express.Response): void => {
  function updateUser(user: User): void {
    const existUser: User | undefined = users.find(
      (eachUser) => eachUser.id == user.id
    );
    if (!existUser) {
      res.status(400).send(`user is not exist`);
      return;
    }
    existUser.name = user.name;
    existUser.address = user.address;
    res.send(existUser);
  }

  const idOfUpdatingUser: number = parseInt(req.params.id);
  const newUser: User = {
    id: idOfUpdatingUser,
    name: req.body.name,
    address: req.body.address,
  };
  updateUser(newUser);
});

router.post(`/`, (req: express.Request, res: express.Response): void => {
  function addUser(user: User): void {
    if (user.name && user.address) {
      users.push(user);
      res.send(user);
      return;
    }
    res.send("Cannot add user. User is invalid");
    return;
  }

  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
    address: req.body.address,
  };
  addUser(newUser);
});

router.delete(`/:id`, (req: express.Request, res: express.Response): void => {
  function deleteUser(id: number): void {
    let newUsers: Array<User> = [];
    let userToDelete: User | undefined;
    users.forEach((user) => {
      if (user.id != id) {
        newUsers.push(user);
        return;
      }
      userToDelete = user;
    });
    users = newUsers;
    res.send(userToDelete);
  }

  const idOfDeletingUser: number = parseInt(req.params.id);
  deleteUser(idOfDeletingUser);
});

router.delete(`/`, (req: express.Request, res: express.Response): void => {
  function deleteLastUser(): void {
    if (users.length !== 0) {
      const lastUser = users[users.length - 1];
      res.send(lastUser);
      users.pop();
      return;
    }
    res.send(`Cannot delete user. There are no user left to delete`);
  }

  deleteLastUser();
});

module.exports = router;
