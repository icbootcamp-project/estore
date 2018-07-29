const mongoose = require('mongoose');
const Category = require('../models/Category');

module.exports = function(req, res, next) {
  console.log('body is ', req.body);
  // const id = req.body.id;
  const name = req.body.name;
  const imgUrl = req.body.imgUrl;
  const subCategorys = req.body.subCategorys;
  const id = mongoose.Types.ObjectId();
  let highestID = 0;
  Category.find({}, 'categoryId', (err, categories) => {
    let highestCID = categories[categories.length - 1].categoryId;
    highestID = highestCID.slice(1);
    let numericID = parseInt(highestID) + 1;
    const categoryId = 'c' + numericID;

    var category = new Category({
      _id: id,
      categoryId,
      name,
      imgUrl,
      subCategorys
    });
    // Category.collection.dropIndexes({ name: 1 });
    category.save((err, category) => {
      if (err) {
        next(err);
      } else {
        res.status(201).send(category);
      }
    });
  });
};
