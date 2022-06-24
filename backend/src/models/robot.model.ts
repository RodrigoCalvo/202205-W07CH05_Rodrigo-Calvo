import mongoose from 'mongoose';
import { mongoooseConnect } from '../db/mongoose.js';

export interface iRobot {
    id: string;
    name: string;
    image: string;
    speed: number;
    life: number;
    born: string;
}

const robotSchema = new mongoose.Schema({
    id: String,
    name: { type: String, required: true },
    image: String,
    speed: Number,
    life: Number,
    born: String,
    title: { type: String, required: true },
    author: mongoose.SchemaTypes.String, //para primitivos no hace falta, basta con el constructor de js
    alreadyRead: { type: Boolean, default: false },
});

export const Robot = mongoose.model('Book', robotSchema);

await mongoooseConnect(); // ES IMPORTANTE NO OLVIDAR ESTABLECER LA CONEXIÓN
