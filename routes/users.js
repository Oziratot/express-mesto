const users = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

users.get('/', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ошибка загрузки пользователей' });
      return;
    }
    const usersList = JSON.parse(data);
    res.send(usersList);
  });
});

users.get('/:_id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ошибка загрузки пользоватлей' });
      return;
    }
    const usersList = JSON.parse(data);
    const user = usersList.find((item) => item._id === req.params._id);
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.send(user);
  });
});

module.exports = users;
