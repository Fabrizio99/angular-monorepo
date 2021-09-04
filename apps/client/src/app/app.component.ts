import { BooksService } from '@angular-monorepo/core-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.all()
      .subscribe( resp => console.log(resp))
  }
}
