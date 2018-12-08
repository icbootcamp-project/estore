var mongoose = require('mongoose');
var Product = require('../models/Product');

module.exports = function(req,res){


    console.log(req.body)
    const id = mongoose.Types.ObjectId();  //it will create its own unique id
    const {name,price,imgUrl,brandLogoUrl,cat,subCat} = req.body;

    console.log(id,name,price,cat);
    var product = new Product({
        name,
        imgUrl,
        price,
        brandLogoUrl,
        cat,
        subCat
    })
    product.save((err,req)=>{

        if(err){
        
            console.log(err);

        }else{
            res.send("Saved Successfully");
        }

    });



}