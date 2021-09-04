import { Book } from '@angular-monorepo/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiEndpoint = 'http://localhost:3333/api/';
  model       = 'books';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Book[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Book>(this.getUrlWithId(id));
  }

  create(book: Book) {
    return this.http.post(this.getUrl(), book)
  }

  update(book: Book) {
    return this.http.put(this.getUrlWithId(book.id), book)
  }

  delete(book: Book) {
    return this.http.delete(this.getUrlWithId(book.id))
  }

  private getUrl() {
    return `${this.apiEndpoint}${this.model}`
  }

  private getUrlWithId(id: string | null) {
    return `${this.getUrl()}/${id}`
  }
}