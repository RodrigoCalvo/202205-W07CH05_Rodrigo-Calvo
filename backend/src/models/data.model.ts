export abstract class DataModel<T extends { id: string }> {
    abstract findAll(): Promise<Array<T>>;
    abstract find(id: T['id']): Promise<T | undefined>;
    abstract create(data: Partial<T>): Promise<T['id']>;
    abstract update(id: T['id'], data: Partial<T>): Promise<T>;
    abstract delete(id: T['id']): Promise<boolean>;
}
