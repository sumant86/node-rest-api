import express from 'express';
import asyncHandler from 'express-async-handler';
import { userService } from '../../services';

export const usersRouter = express.Router();

// Get all books
usersRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const users = await userService.getUsers();
        res.send(users);
    })
);

// Get one book
usersRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const user = await userService.getUser(id);
        res.send(user);
    })
);
