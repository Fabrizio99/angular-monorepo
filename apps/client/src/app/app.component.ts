import { Book } from '@angular-monorepo/api-interfaces';
import { BooksService } from '@angular-monorepo/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  books$!: Observable<Book[]>;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.books$ = this.booksService.all();
  }
}
