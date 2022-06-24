import { Router } from 'express';
import { MongooseController } from '../controllers/mongoose.controller.js';
import { Book } from '../models/robot.model.js';

export const booksRouter = Router();

export const booksController = new MongooseController(Book);

booksRouter.get('/', booksController.getAllController);
booksRouter.get('/:id', booksController.getController);
booksRouter.post('/', booksController.postController);
booksRouter.patch('/:id', booksController.patchController);
booksRouter.delete('/:id', booksController.deleteController);
