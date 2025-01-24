import express from 'express';
import { insertData, getAllProducts, updateProduct, deleteProduct } from '../controller/product';

const router = express.Router();

// Route to insert new product
router.post('/products', async (req, res) => {
  try {
    const product = await insertData(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error inserting product', error });
  }
});

// Route to get all products
router.get('/products', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// Route to update product by ID
router.put('/products/:productId', async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.productId, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});

// Route to delete product by ID
router.delete('/products/:productId', async (req, res) => {
  try {
    const deletedProduct = await deleteProduct(req.params.productId);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
});

export default router;
