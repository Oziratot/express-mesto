const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

function errorOutput(err, res) {
  if (err.name === 'ValidationError') {
    res.status(BAD_REQUEST).send({ message: 'Неверные данные' });
  }
  if (err.name === 'CastError') {
    res.status(NOT_FOUND).send({ message: 'Ресурс не найден' });
  } else {
    res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка' });
  }
}

module.exports = { errorOutput };
