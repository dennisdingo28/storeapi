<<<<<<< HEAD
const getAllProductsStatic = async (req,res)=>{
    throw new Error('testing async errors');
    res.status(200).json({msg:"products testing router"})
}

const getAllProducts = async (req,res)=>{
    res.status(200).json({msg:"products route"});
}

module.exports = {getAllProductsStatic,getAllProducts};
=======
const Product = require('../models/product');

const getAllProducts = async (req,res)=>{
    const {featured,company,name}=req.query;
    const queryObject = {};
    if(featured){
        queryObject.featured=featured === 'true'?true:false;
    }
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:'i'};
    }
    console.log(queryObject);
    const products = await Product.find(queryObject);
    res.status(201).json({products,nbHits:products.length});
}

const getAllProductsStatic = async (req,res)=>{   
    const products = await Product.find({featured:true});
    res.status(201).json({products,nbHits:products.length});
}

module.exports = {getAllProducts,getAllProductsStatic};
>>>>>>> 6036ccb56088e54797646ecb9bea3e764867325a
