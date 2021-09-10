import { Book } from '@angular-monorepo/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angular-monorepo-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  currentBook!: Book;
  @Input() set book(value: Book){
    this.currentBook = {...value}
  }
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}
