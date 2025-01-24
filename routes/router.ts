import express from 'express';
const router = express.Router();

import {addProduct, getProducts} from "../controller/product"

router.get("/products",getProducts);
router.post("/product",addProduct);

export default router;