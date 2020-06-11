import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

import { BookDTO } from '../../DTO/books.dto'

@Controller('books')
export class BooksController {

    @Get()
    getAllbooks() : string{
        return 'Todos os livros estão aqui';
    }

    @Post()
    saveBook(@Body() newBook: BookDTO) : BookDTO {
        return newBook;
    }

    //Metodo para dar update.
    @Patch()
    updateBook(): string{
        return 'Atualizei esse livro';
    }

    @Delete()
    deleteBook():string{
        return 'Deletei um livro.';
    }
}
