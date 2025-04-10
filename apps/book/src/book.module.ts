import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
