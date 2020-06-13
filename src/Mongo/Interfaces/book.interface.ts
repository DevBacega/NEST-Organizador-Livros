import {Document, Types} from 'mongoose';
import * as Mongoose from 'mongoose';  
import { AuthorDTO } from 'src/DTO/author.dto';

export interface Book extends Document {

    readonly _id: Types.ObjectId, //ID que o Mongoose gera.
    readonly name: string,
    readonly author: AuthorDTO[],
    readonly language: string,
    readonly releaseYear: number,
    readonly publisher: string,
    readonly pages:number
}