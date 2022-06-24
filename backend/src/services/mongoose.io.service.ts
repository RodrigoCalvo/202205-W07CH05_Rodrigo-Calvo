import { IOService } from './io.service';
import { mongoooseConnect } from '../db/mongoose.js';

//Ya no podemos externalizar i/o del modelo porque mongoose
//los gestiona a ambos
export class MongooseIOService<T extends { id: string }> extends IOService<T> {
    constructor() {
        super();
        this.init();
    }
    private async init() {
        await mongoooseConnect();
    }
    find(id?: T['id'] | undefined): Promise<T | T[] | undefined> {
        throw new Error('Method not implemented.');
    }
    create(data: Partial<T>): Promise<T['id']> {
        throw new Error('Method not implemented.');
    }
    update(id: T['id'], data: Partial<T>): Promise<T> {
        throw new Error('Method not implemented.');
    }
    delete(id: T['id']): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
