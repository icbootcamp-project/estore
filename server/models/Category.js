var mongoose = require('mongoose');

var CategorysSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String
  },
  subCategorys: {
    type: [String]
  },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorysSchema);
