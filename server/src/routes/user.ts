import express = require("express");
const router = express.Router();

interface User {
  name: string;
  address: string;
}

let users: Array<User> = [
  {
    name: `sanuja`,
    address: `kalaeliya`,
  },
  {
    name: `amal`,
    address: `wattala`,
  },
  {
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
    const selectedUser:User|undefined = users[id];
    res.send(selectedUser);
  }

  getUser(parseInt(req.params.id));
});

router.patch(`/:id`, (req: express.Request, res: express.Response): void => {
  function updateUser(id:number, user: User): void {
    if (users.length <= id) {
      res.status(400).send(`user is not exist`);
      return;
    }
    res.send(user);
  }

  const idOfUpdatingUser: number = parseInt(req.params.id);
  const newUser: User = {
    name: req.body.name,
    address: req.body.address,
  };
  updateUser(idOfUpdatingUser, newUser);
});

router.post(`/`, (req: express.Request, res: express.Response): void => {
  function addUser(name:string, address:string): void {
    if (name && address) {
      const user:User = {
        name,
        address  
      }
      users.push(user);
      res.send(user);
      return;
    }
    res.send("Cannot add user. User is invalid");
    return;
  }

  const {name, address} = req.body;
  addUser(name, address);
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
