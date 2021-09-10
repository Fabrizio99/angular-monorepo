import { Book } from '@angular-monorepo/api-interfaces';
import { BooksFacade } from '@angular-monorepo/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const emptyBook: Book = {
  author: '',
  id: null,
  image: '',
  name: '',
  year: 0
}
@Component({
  selector: 'angular-monorepo-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  books$: Observable<Book[]> = this.booksFacade.allBooks$;
  selectedBook$: Observable<Book> = this.booksFacade.selectedBook$;

  constructor(private booksFacade: BooksFacade) { }

  ngOnInit(): void {
    this.reset()
  }

  reset() {
    this.loadBooks();
    this.booksFacade.mutations$.subscribe(_ => this.reset())
  }

  loadBooks() {
    this.booksFacade.loadBooks();
    this.selectBook(emptyBook);
  }

  selectBook(book: Book) {
    this.booksFacade.selectBooks(book)
  }

  saveBook(book: Book){
    if(book.id){
      this.updateBook(book)
    }else{
      this.createBook(book)
    }
  }

  resetForm(){
    this.selectBook(emptyBook);
  }

  deleteBook(book: Book) {
    this.booksFacade.deleteBook(book)
  }

  createBook(book: Book) {
    this.booksFacade.createBook(book)
  }

  updateBook(book: Book) {
    this.booksFacade.updateBook(book)
  }
}
