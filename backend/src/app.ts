import express, { NextFunction, Request, response, Response } from 'express';
import morgan from 'morgan';
import { booksRouter } from './routers/books.js';
import { notesRouter } from './routers/notes.js';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/notes', notesRouter);
app.use('/books', booksRouter);

// Control de errores
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    req;
    next;
    res.status(error.name === 'ValidationError' ? 406 : 500);
    res.end(JSON.stringify({ type: error.name, message: error.message }));
});
