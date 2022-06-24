import { Router } from 'express';
import { DataController } from '../controllers/data.controller.js';
import { iNote, Note } from '../models/notes.model.js';
import { MongoIOService } from '../services/mongo.io.service.js';

export const notesRouter = Router();

export const notesController = new DataController(
    new Note(new MongoIOService<iNote>('ISDICoders', 'notes'))
);

notesRouter.get('/', notesController.getAllController);
notesRouter.get('/:id', notesController.getController);
notesRouter.post('/', notesController.postController);
notesRouter.patch('/:id', notesController.patchController);
notesRouter.delete('/:id', notesController.deleteController);
