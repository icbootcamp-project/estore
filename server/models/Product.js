var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    imgUrl:{
        type:String
    },
    price:{
        type:Number,
        require:true
    },
    brandLogoUrl:{
        type:String
    },
    cat:{
        type:[String]
    },
    subCat:{
        type:[String]
    }
});

module.exports = mongoose.model('Product',ProductsSchema);