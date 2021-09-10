import { Book } from '@angular-monorepo/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

const emptyBook: Book = {
  author: '',
  id: null,
  image: '',
  name: '',
  year: 0
}
@Component({
  selector: 'angular-monorepo-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  currentBook!: Book;
  @Input() set book(value: Book | null){
    this.currentBook = {...(value?value:emptyBook)}
  }
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}
