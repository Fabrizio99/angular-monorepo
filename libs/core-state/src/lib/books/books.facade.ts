import { Book } from '@angular-monorepo/api-interfaces';
import { BooksService } from '@angular-monorepo/core-data';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class BooksFacade {
  private allBooks =  new Subject<Book[]>();
  private selectedBook = new Subject<Book>();
  private mutations = new Subject();

  allBooks$ = this.allBooks.asObservable();
  selectedBook$ = this.selectedBook.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private booksService: BooksService){}

  selectBooks(book: Book) {
    this.selectedBook.next(book);
  }

  loadBooks() {
    this.booksService.all()
      .subscribe((books: Book[]) => this.allBooks.next(books))
  }

  deleteBook(book: Book) {
    this.booksService.delete(book)
      .subscribe(_ => this.mutations.next(true))
  }

  updateBook(book: Book) {
    this.booksService.update(book)
      .subscribe(_ => this.mutations.next(true))
  }

  createBook(book: Book) {
    this.booksService.create(book)
      .subscribe(_ => this.mutations.next(true))
  }
}
