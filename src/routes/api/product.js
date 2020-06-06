import express from 'express';
import asyncHandler from 'express-async-handler';
import { productService } from '../../services';

export const productsRouter = express.Router();

// Get all books
productsRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const books = await productService.getProducts();
        res.send(books);
    })
);

// Get one book
productsRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const book = await productService.getProduct(id);
        res.send(book);
    })
);
