import { ObjectId } from 'mongodb';
import { mongoConnect } from '../db/mongo.js';
import { IOService } from './io.service.js';

export class MongoIOService<T extends { id: string }> extends IOService<T> {
    constructor(public dbName: string, public collectionName: string) {
        super();
    }
    async find(id?: T['id']) {
        const { connect, collection } = await mongoConnect(
            this.dbName,
            this.collectionName
        );
        if (id) {
            const dbId = new ObjectId(id);
            const result = await collection.findOne({
                _id: dbId,
            });
            if (result === null) return undefined;
            connect.close();
            return result as unknown as T;
        } else {
            const result = await collection.find().toArray();
            connect.close();
            return result as unknown as Array<T>;
        }
    }
    async create(data: Partial<T>) {
        const { connect, collection } = await mongoConnect(
            this.dbName,
            this.collectionName
        );
        const result = await collection.insertOne(data);
        connect.close();
        return result.insertedId.id.toString();
    }
    async update(id: T['id'], data: Partial<T>) {
        const { connect, collection } = await mongoConnect(
            this.dbName,
            this.collectionName
        );
        const dbId = new ObjectId(id);
        const result = await collection.findOneAndUpdate(
            { _id: dbId },
            { $set: { ...data } }
        );
        connect.close();
        return result.value as unknown as T;
    }
    async delete(id: T['id']) {
        const { connect, collection } = await mongoConnect(
            this.dbName,
            this.collectionName
        );
        const dbId = new ObjectId(id);
        const result = await collection.findOneAndDelete({ _id: dbId });
        connect.close();
        return result.ok === 1;
    }
}
