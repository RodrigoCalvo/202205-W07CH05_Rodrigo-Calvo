import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { robotsRouter } from './routers/robots.js';
import cors from 'cors';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/robots', robotsRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    req;
    next;
    res.status(error.name === 'ValidationError' ? 406 : 500);
    res.end(JSON.stringify({ type: error.name, message: error.message }));
});
