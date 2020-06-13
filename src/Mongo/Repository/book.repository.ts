import { Injectable, Type } from "@nestjs/common";
import { BookDTO } from "src/DTO/books.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "../Interfaces/book.interface";
import { Model, Mongoose, Types } from "mongoose";

@Injectable()
export class BookRepository{

constructor(
    @InjectModel('book') private readonly bookModel: Model<Book>
){}


async saveBook(newBook: BookDTO): Promise<Book>{
    const savedBook = new this.bookModel(newBook);
    return await savedBook.save()
}

    
async getAllBooks(): Promise<Book[]>{
      return await this.bookModel.find({},{__v : false}).sort ({name:+1}).exec();
}

async getBookId(bookID: Types.ObjectId): Promise<Book> {
    return await this.bookModel.findById(bookID,{__v : false});
}

async deleteBookById(bookID: Types.ObjectId):Promise<Book> {
    return await this.bookModel.findOneAndDelete({_id: bookID})
}

async updateBookById(Book:{bookID: Types.ObjectId, newBook: BookDTO} ):Promise<Book> {
    return await this.bookModel.replaceOne({ _id : Book.bookID}, Book.newBook);
}

async getBookByAuthorName(authorName: string[]): Promise<Book[]> {
    return await this.bookModel.find({

        $or : [
            {"author.name" : { $in:authorName}},
            {"author.surname" : {$in: authorName}}
        ]

    })
}

async getBookByName(bookName: string): Promise<Book[]>{

    return await this.bookModel.find({
        name: { '$regex': bookName, '$options':'i'},
    },
        {__v:false}
    )
}


}