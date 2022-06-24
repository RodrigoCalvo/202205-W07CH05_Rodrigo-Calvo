import { Router } from 'express';
import { MongooseController } from '../controllers/mongoose.controller.js';
import { Robot } from '../models/robot.model.js';

export const robotsRouter = Router();

export const robotsController = new MongooseController(Robot);

robotsRouter.get('/', robotsController.getAllController);
robotsRouter.get('/:id', robotsController.getController);
robotsRouter.post('/', robotsController.postController);
robotsRouter.patch('/:id', robotsController.patchController);
robotsRouter.delete('/:id', robotsController.deleteController);
