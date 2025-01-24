import {Request, Response} from "express"
import { readData, writeData } from "../utils/database";
import IProduct from "../types/IProduct"

export const addProduct = async (req : Request, res : Response) : Promise<void> => {
    try {
        const {name, category, price, discounted_price} = req.body;

        if (!name || !category || !price || !discounted_price) {
            res.status(400).send({ message: 'Missing required fields' });
            return;
        }

        const data = await readData();
        const products: IProduct[] = data.products;

        const newProduct : IProduct = {
            name,
            category,
            price,
            discounted_price
        }

        products.push(newProduct);
        await writeData({ products });

        res.status(201).json({
            message: 'Product added successfully',
            product: newProduct,
        });

    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
}

export const getProducts = async (req : Request, res : Response) : Promise<void> => {
    try {
        const data = await readData();
        const products: IProduct[] = data.products;
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

