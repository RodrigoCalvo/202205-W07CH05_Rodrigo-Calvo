import { NextFunction, Request, Response } from 'express';
import ExpandPrompt from 'inquirer/lib/prompts/expand';
import mongoose from 'mongoose';
import { Controller } from './controller';

describe('Given a instantiated controller DataController', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let next: Partial<NextFunction> = jest.fn();

    let mockModel = {
        find: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    };
    let controller = new Controller(mockModel as unknown as mongoose.Model<{}>);

    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
    });
    describe('When method getAllController is called', () => {
        test('Then resp.end should be called with the data', async () => {
            const mockResult = [{ test: 'test' }];
            (mockModel.find as jest.Mock).mockResolvedValue(mockResult);
            await controller.getAllController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });
    describe('When method getController is called', () => {
        test('And response is ok, then resp.end should be called with data', async () => {
            const mockResult = [{ test: 'test' }];
            (mockModel.findById as jest.Mock).mockResolvedValue(mockResult);
            await controller.getController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
        test('And response is not ok, then resp.end should be called without data', async () => {
            const mockResult = null;
            (mockModel.findById as jest.Mock).mockResolvedValue(mockResult);
            await controller.getController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
            expect(resp.status).toHaveBeenCalledWith(404);
        });
    });
    describe('When method postController is called', () => {
        test('Then if not error resp.end should be called with data', async () => {
            const mockResult = [{ test: 'test' }];
            (mockModel.create as jest.Mock).mockResolvedValue(mockResult);
            await controller.postController(
                req as Request,
                resp as Response,
                next as NextFunction
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
        test('Then if error function next should be called', async () => {
            const mockResult = null;
            (mockModel.create as jest.Mock).mockRejectedValue(mockResult);
            await controller.postController(
                req as Request,
                resp as Response,
                next as NextFunction
            );
            expect(next).toHaveBeenCalled();
        });
    });
    describe('When method patchController is called', () => {
        test('Then resp.end should be called with data', async () => {
            const mockResult = [{ test: 'test' }];
            (mockModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(
                mockResult
            );
            await controller.patchController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });
    describe('When method deleteController is called', () => {
        test('Then res.status should be called with status', async () => {
            const mockResult = true;
            (mockModel.findByIdAndDelete as jest.Mock).mockResolvedValue(
                mockResult
            );
            await controller.deleteController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
            expect(resp.status).toHaveBeenCalledWith(202);
        });
    });
    describe('When method deleteController is called', () => {
        test('Then res.status should be called with status', async () => {
            const mockResult = false;
            (mockModel.findByIdAndDelete as jest.Mock).mockResolvedValue(
                mockResult
            );
            await controller.deleteController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
            expect(resp.status).toHaveBeenCalledWith(404);
        });
    });
});
