import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: CreateBookDto[] = [];

  create(createBookDto: Omit<CreateBookDto, 'id'>): CreateBookDto {
    const newBook: CreateBookDto = {
      ...createBookDto,
      id: this.books.length > 0 ? this.books.at(-1)!.id + 1 : 1,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) return { message: "Book not found!" };

    this.books[bookIndex] = { ...this.books[bookIndex], ...updateBookDto };
    return {
      message: "Book updated successfully",
      book: this.books[bookIndex],
    };
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) return { message: "Book not found!" };

    const removedBook = this.books[bookIndex];
    this.books.splice(bookIndex, 1);

    return {
      message: "Book removed successfully",
      book: removedBook,
    };
  }
}
