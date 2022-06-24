import { WithoutId } from 'mongodb';

export abstract class IOService<T extends { id: string }> {
    abstract find(id?: T['id']): Promise<T | Array<T> | undefined>;
    abstract create(data: Partial<T>): Promise<T['id']>;
    abstract update(id: T['id'], data: Partial<T>): Promise<T>;
    abstract delete(id: T['id']): Promise<boolean>;
}
