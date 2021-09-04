import { Book } from '@angular-monorepo/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id: '1',
      name: 'Travesuras de la niña mala',
      author: 'Mario Vargas Llosa',
      year: 2006
    },
    {
      id: '2',
      name: 'Atomic Habits',
      author: 'James Clear',
      year: 2008
    },
    {
      id: '3',
      name: 'The Defining Decade',
      author: 'Meg Jay',
      year: 2012
    },
  ]

  findAll() {
    return this.books;
  }
  
  findOne(id: string) {
    return this.books.find(book => book.id === id)
  }
  
  create(book: Book) {
    this.books = [...this.books, Object.assign({}, book, {id: uuidv4()})]
    return this.books
  }

  update(id: string, book: Book) {
    this.books = this.books.map(b => b.id === id? book: b)
    return this.books;
  }

  remove(id: string) {
    this.books = this.books.filter(book => book.id !== id)
    return this.books;
  }
}
