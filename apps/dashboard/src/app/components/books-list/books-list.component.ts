import { Book } from '@angular-monorepo/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angular-monorepo-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() books: Book[] = [];
  @Input() readOnly = false;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
