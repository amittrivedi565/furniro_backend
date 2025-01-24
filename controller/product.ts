import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to insert new product data
export const insertData = async (data: any) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        category: data.category,
        price: data.price,
        discountedPrice: data.discountedPrice || null,
        image: data.image || null,
        discount: data.discount || null,
      },
    });
    return product;
  } catch (error) {
    console.error('Error inserting data:', error);
    throw error;
  }
};

// Function to fetch all products
export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to update product by ID
export const updateProduct = async (productId: string, data: any) => {
  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: data.name,
        category: data.category,
        price: data.price,
        discountedPrice: data.discountedPrice || null,
        image: data.image || null,
        discount: data.discount || null,
      },
    });
    return updatedProduct;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Function to delete a product by ID
export const deleteProduct = async (productId: string) => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    return deletedProduct;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
