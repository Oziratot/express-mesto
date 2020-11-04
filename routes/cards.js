const cards = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

cards.get('/', (req, res) => {
  fs.readFile(cardsPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ошибка загрузки карточек' });
      return;
    }
    const cardList = JSON.parse(data);
    res.send(cardList);
  });
});

module.exports = cards;
