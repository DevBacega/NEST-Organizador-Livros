import { Injectable, BadRequestException } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/Mongo/Repository/book.repository';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { Types } from 'mongoose';

@Injectable()
export class BooksService {

constructor(
    private readonly bookRepository: BookRepository
){}

async saveBook(newBook: BookDTO):Promise<Book> {
    return await this.bookRepository.saveBook(newBook);
}

async  getAllBooks(): Promise<Book[]> {

    const allBooks = await this.bookRepository.getAllBooks();

    if(!allBooks.length)
    throw new BadRequestException('There are no books registered yet');
    else
    return allBooks;
}

async getBookById(bookID: Types.ObjectId): Promise<Book> {
    try {

        const existBook = await this.bookRepository.getBookId(bookID);
        if(!existBook)
            throw new BadRequestException('Thre are no results');
        return existBook;
    } catch (e) {
        throw new BadRequestException('The are no results');
    }
}

async  deleteBookById(bookID: Types.ObjectId): Promise<Book> {
    try {
        return await this.bookRepository.deleteBookById(bookID)
    } catch (e) {
        throw new BadRequestException("This book does not exists.")
    }
}

async updateBookById(bookID: Types.ObjectId, newBook: BookDTO): Promise<Book> {
    try {
        const existBook = await this.bookRepository.getBookId(bookID);
        if(!existBook)
            throw new BadRequestException('Thre are no results with this ID');
        
        const updatedBook =  await this.bookRepository.updateBookById({bookID, newBook})
        
        if(updatedBook)
            return this.bookRepository.getBookId(bookID);
        else
            throw new BadRequestException('Error in updated.')

    } catch (e) {
        throw new BadRequestException('The are no results');
    }
}

async getBookByAuthorName(authorName: string): Promise<Book[]> {
    const splitedAuthorName = authorName.split(' ');

    const foundBooks = await this.bookRepository.getBookByAuthorName(splitedAuthorName)

    if(!foundBooks.length)
        throw new BadRequestException('No results for this author');
    
    return foundBooks;
}

async getBookByName(bookName: string): Promise<Book[]> {

    const foundBooks = await this.bookRepository.getBookByName(bookName)

    if(!foundBooks.length)
        throw new BadRequestException('No results for this name');
    
    return foundBooks;
}

}
