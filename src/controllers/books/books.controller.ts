import { Controller, Get, Post, Patch, Delete, Body, Param, Type } from '@nestjs/common';

import { BookDTO } from '../../DTO/books.dto'
import { BooksService } from 'src/Services/books/books.service';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { Types } from 'mongoose';

@Controller('books')
export class BooksController {
    
    constructor(
        private readonly bookService: BooksService
    ){}

    @Get()
    async getAllbooks() : Promise<Book[]>{
        return await this.bookService.getAllBooks()
    }

    @Get('id/:bookID')
    async getBookById(@Param('bookID') bookID: Types.ObjectId): Promise<Book>{
        return await this.bookService.getBookById(bookID)
    }

    @Get('author/:authorName')
    async getBookByAuthorName(@Param('authorName') authorName: string): Promise<Book[]> {
        return await this.bookService.getBookByAuthorName(authorName)
    }

    @Get('name/:bookName')
    async getBookByName(@Param('bookName') bookName: string): Promise<Book[]> {
        return await this.bookService.getBookByName(bookName)
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO) : Promise<Book> {
        return await this.bookService.saveBook(newBook);
    }

    //Metodo para dar update.
    @Patch(':bookID')
    async updateBook(@Param('bookID') bookID: Types.ObjectId, @Body() newBook: BookDTO): Promise<Book>{
        return  await this.bookService.updateBookById(bookID, newBook);
    }

    @Delete(':bookID')
    async deleteBookById(@Param('bookID') bookID: Types.ObjectId):Promise<Book>{
        return await this.bookService.deleteBookById(bookID);
    }
}
