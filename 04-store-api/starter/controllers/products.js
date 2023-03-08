const getAllProducts = (req,res)=>{
    throw new Error('test async errors bro')
    res.status(201).json({msg:"products testing router"});
}

const getAllProductsStatic = (req,res)=>{
    res.status(201).json({msg:"products route"});
}

module.exports = {getAllProducts,getAllProductsStatic};