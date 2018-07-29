const Category = require('../models/Category');

// module.exports = function getAllData(req, res, next) {
//   Category.findOne({ name: 'foodssss' }, (err, categories) => {
//     res.send(categories);
//   });
// };

module.exports = function getAllData(req, res, next) {
  Category.find({ _id: req.params.id }, 'name imgUrl', (err, categories) => {
    const category = categories[0];
    category.name = category.name + '_changed';
    category.save((err, category) => {
      res.send(category);
    });
  });
};
