import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export class MongooseController<T> {
    constructor(public model: mongoose.Model<T>) {}

    getAllController = async (req: Request, resp: Response) => {
        req;
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(await this.model.find()));
    };

    getController = async (req: Request, resp: Response) => {
        resp.setHeader('Content-type', 'application/json');
        const result = await this.model.findById(req.params.id);
        if (result) {
            resp.end(JSON.stringify(result));
        } else {
            resp.status(404);
            resp.end(JSON.stringify({}));
        }
    };

    postController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            const result = await this.model.create(req.body);
            resp.setHeader('Content-type', 'application/json');
            resp.status(201);
            resp.end(JSON.stringify(result));
        } catch (error) {
            next(error);
        }
    };

    patchController = async (req: Request, resp: Response) => {
        const result = await this.model.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(result));
    };

    deleteController = async (req: Request, resp: Response) => {
        const success = await this.model.findByIdAndDelete(req.params.id);
        resp.status(success ? 202 : 404);
        resp.end(JSON.stringify({}));
    };
}
