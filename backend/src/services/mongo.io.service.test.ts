import { mongoConnect } from '../db/mongo.js';
import { iNote } from '../models/notes.model.js';
import { IOService } from './io.service.js';
import { MongoIOService } from './mongo.io.service.js';

jest.mock('../db/mongo.js');

describe('Given a instantiated model Notes', () => {
    let model: IOService<iNote>;
    const mockClose = jest.fn();
    const mockFind = jest.fn();
    const mockFindOne = jest.fn();
    const mockInsertOne = jest.fn();
    const mockFindOneAndUpdate = jest.fn();
    const mockFindOneAndDelete = jest.fn();
    beforeEach(() => {
        (mongoConnect as jest.Mock).mockReturnValue({
            connect: { close: mockClose },
            collection: {
                find: mockFind,
                findOne: mockFindOne,
                insertOne: mockInsertOne,
                findOneAndUpdate: mockFindOneAndUpdate,
                findOneAndDelete: mockFindOneAndDelete,
            },
        });
        model = new MongoIOService('', '');
    });

    describe('When method find is called without argument', () => {
        test('Then collection.find() should be called', async () => {
            mockFind.mockReturnValue({
                toArray: jest.fn().mockResolvedValue({}),
            });
            await model.find();
            expect(mockFind).toHaveBeenCalled();
        });
    });
    describe('When method find is called with a valid id', () => {
        test('Then collection.findOne() should be called', async () => {
            mockFindOne.mockReturnValue({});
            const result = await model.find('62b49fdaa32813029831dcb2');
            expect(mockFind).toHaveBeenCalled();
            expect(result).toBeTruthy();
        });
    });
    describe('When method find is called with a non valid id', () => {
        test('Then collection.findOne() should be called', async () => {
            mockFindOne.mockReturnValue(null);
            const result = await model.find('62b49fdaa32813029831dcb2');
            expect(mockFindOne).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
    });
    describe('When method create is called', () => {
        test('Then collection.insertOne() should be called', async () => {
            mockInsertOne.mockReturnValue({ insertedId: { id: 5 } });
            const result = await model.create({});
            expect(mockInsertOne).toHaveBeenCalled();
            expect(result).toBe('5');
        });
    });
    describe('When method update is called', () => {
        test('Then collection.findOneAndUpdate() should be called', async () => {
            mockFindOneAndUpdate.mockResolvedValue({});
            await model.update('62b49fdaa32813029831dcb2', {});
            expect(mockFindOneAndUpdate).toHaveBeenCalled();
            expect(mockClose).toHaveBeenCalled();
        });
    });
    describe('When method delete is called with a valid id', () => {
        test('Then collection.findOneAndDelete() should be called', async () => {
            mockFindOneAndDelete.mockResolvedValue({ ok: 1 });
            const result = await model.delete('62b49fdaa32813029831dcb2');
            expect(mockFindOneAndDelete).toHaveBeenCalled();
            expect(result).toBeTruthy();
        });
    });
});
