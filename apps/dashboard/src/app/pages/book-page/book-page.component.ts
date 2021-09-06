import { Book } from '@angular-monorepo/api-interfaces';
import { BooksService } from '@angular-monorepo/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'angular-monorepo-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  books$: Observable<Book[]> = of([])
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.books$ = this.booksService.all();
  }
}
