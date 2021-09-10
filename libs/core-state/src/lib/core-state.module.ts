import { CoreDataModule } from '@angular-monorepo/core-data';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksFacade } from './books/books.facade';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule
  ],
  providers: [BooksFacade],
})
export class CoreStateModule {}
