import { IOService } from '../services/io.service.js';
import { DataModel } from './data.model.js';

export interface iNote {
    id: string;
    author: string;
    content: string;
    important: boolean;
}

export class Note extends DataModel<iNote> implements iNote {
    id!: string;
    author!: string;
    content!: string;
    important!: boolean;
    constructor(public myIOService: IOService<iNote>) {
        super();
    }
    async findAll(): Promise<iNote[]> {
        return (await this.myIOService.find()) as iNote[];
    }
    async find(id: string): Promise<iNote | undefined> {
        return (await this.myIOService.find(id)) as iNote;
    }
    async create(data: Partial<iNote>): Promise<iNote['id']> {
        return await this.myIOService.create(data);
    }
    async update(id: string, data: Partial<iNote>): Promise<iNote> {
        return await this.myIOService.update(id, data);
    }
    async delete(id: string): Promise<boolean> {
        return await this.myIOService.delete(id);
    }
}
