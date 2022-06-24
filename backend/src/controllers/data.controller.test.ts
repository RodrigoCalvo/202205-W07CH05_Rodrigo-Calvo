import { Request, Response } from 'express';
import { DataModel } from '../models/data.model';
import { Note } from '../models/notes.model';
import { MongoIOService } from '../services/mongo.io.service';
import { DataController } from './data.controller';

describe('Given a instantiated controller DataController', () => {
    let dataController: DataController;
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let dataModel: DataModel<any>;
    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
        dataModel = new Note(new MongoIOService('', ''));
        dataController = new DataController(dataModel);
    });
    describe('When method getAllController is called', () => {
        test('Then resp.end should be called', async () => {
            Note.prototype.findAll = jest.fn();
            await dataController.getAllController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalled();
        });
    });

    describe('When method getController is called', () => {
        test('And response is ok, then resp.end should be called with data', async () => {
            const result = { test: 'test' };
            Note.prototype.find = jest.fn().mockResolvedValue(result);
            await dataController.getController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
        });
        test('And response is not ok, then resp.end should be called without data', async () => {
            const result = null;
            Note.prototype.find = jest.fn().mockResolvedValue(result);
            await dataController.getController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify({}));
            expect(resp.status).toHaveBeenCalledWith(404);
        });
    });

    describe('When method postController is called', () => {
        test('Then resp.end should be called with data', async () => {
            const result = { test: 'test' };
            Note.prototype.create = jest.fn().mockResolvedValue(result);
            await dataController.postController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
        });
    });

    describe('When method patchController is called', () => {
        test('Then resp.end should be called with data', async () => {
            const result = { test: 'test' };
            Note.prototype.update = jest.fn().mockResolvedValue(result);
            await dataController.patchController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
        });
    });

    describe('When method deleteController is called', () => {
        test('Then res.status should be called with status', async () => {
            const result = true;
            Note.prototype.delete = jest.fn().mockResolvedValue(result);
            await dataController.deleteController(
                req as Request,
                resp as Response
            );
            expect(resp.status).toHaveBeenCalledWith(202);
        });
    });
    describe('When method deleteController is called', () => {
        test('Then res.status should be called with status', async () => {
            const result = false;
            Note.prototype.delete = jest.fn().mockResolvedValue(result);
            await dataController.deleteController(
                req as Request,
                resp as Response
            );
            expect(resp.status).toHaveBeenCalledWith(404);
        });
    });
});
