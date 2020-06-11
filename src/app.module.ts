import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';

//Coração da API 


@Module({
  imports: [],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
