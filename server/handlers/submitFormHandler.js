var jwt = require('jsonwebtoken');
var jwtOptions = require('../passport/jwtOptions');

const users = [
  {
    id: '1',
    username: 'yasser',
    password: '50'
  },
  {
    id: '2',
    username: 'Ali',
    password: '30'
  }
];

module.exports = function(req, res, next) {
  console.log(req.body);
  const username = req.body.name;
  const password = req.body.age;

  const user = users.filter(item => {
    if (item.username === username && item.password === password) {
      return true;
    } else {
      return false;
    }
  })[0];

  if (user) {
    // payload should be an object
    const payload = { id: user.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey, {
      expiresIn: 10
    });
    res.status(201).send({ id: user.id, token });
  } else {
    res.sendStatus(401);
  }
};
