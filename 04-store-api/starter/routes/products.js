<<<<<<< HEAD
const express = require('express');
const {getAllProducts,getAllProductsStatic} = require('../controllers/products');

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

=======
const {getAllProducts,getAllProductsStatic}=require('../controllers/products');
const express = require('express');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic)
>>>>>>> 6036ccb56088e54797646ecb9bea3e764867325a

module.exports = router;