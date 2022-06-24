import { iNote, Note } from './notes.model';
import { IOService } from '../services/io.service';

const mockFind = jest.fn();
const mockCreate = jest.fn();
const mockUpdate = jest.fn();
const mockDelete = jest.fn();
const myMockIOService: IOService<iNote> = {
    find: mockFind,
    create: mockCreate,
    update: mockUpdate,
    delete: mockDelete,
};
const model = new Note(myMockIOService);

describe('Given the Note model class instanciated', () => {
    describe('When calling findAll method', () => {
        test('Then the IOService find method should be called', () => {
            model.findAll();
            expect(mockFind).toHaveBeenCalled();
        });
    });
    describe('When calling find method', () => {
        test('Then the IOService find method should be called', () => {
            model.find('');
            expect(mockFind).toHaveBeenCalled();
        });
    });
    describe('When calling create method', () => {
        test('Then the IOService create method should be called', () => {
            model.create({});
            expect(mockCreate).toHaveBeenCalled();
        });
    });
    describe('When calling update method', () => {
        test('Then the IOService update method should be called', () => {
            model.update('', {});
            expect(mockUpdate).toHaveBeenCalled();
        });
    });
    describe('When calling delete method', () => {
        test('Then the IOService delete method should be called', () => {
            model.delete('');
            expect(mockDelete).toHaveBeenCalled();
        });
    });
});
