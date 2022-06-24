// ACTIVADO "moduleResolution": "node" EN TSCONFIG PARA QUE FUNCIONE
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export async function mongoConnect(dbName: string, collectionName: string) {
    const uri = process.env.URI_MONGO;
    const mongoClient = new MongoClient(uri as string);
    const connect = await mongoClient.connect();
    const collection = connect.db(dbName).collection(collectionName);
    return { connect, collection };
}
