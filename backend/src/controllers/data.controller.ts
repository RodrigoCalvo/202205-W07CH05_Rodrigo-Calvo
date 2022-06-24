/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { DataModel } from '../models/data.model.js';

export class DataController {
    constructor(public model: DataModel<any>) {}

    getAllController = async (req: Request, resp: Response) => {
        req;
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(await this.model.findAll()));
    };

    getController = async (req: Request, resp: Response) => {
        resp.setHeader('Content-type', 'application/json');
        const result = await this.model.find(req.params.id);
        if (result) {
            resp.end(JSON.stringify(result));
        } else {
            resp.status(404);
            resp.end(JSON.stringify({}));
        }
    };

    postController = async (req: Request, resp: Response) => {
        const result = await this.model.create(req.body);
        resp.setHeader('Content-type', 'application/json');
        resp.status(201);
        resp.end(JSON.stringify(result));
    };

    patchController = async (req: Request, resp: Response) => {
        const result = await this.model.update(req.params.id, req.body);
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(result));
    };

    deleteController = async (req: Request, resp: Response) => {
        const success = await this.model.delete(req.params.id);
        resp.status(success ? 202 : 404);
        resp.end(JSON.stringify({}));
    };
}
