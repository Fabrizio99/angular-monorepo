import { AntDesignModule } from '@angular-monorepo/ant-design';
import { CoreDataModule } from '@angular-monorepo/core-data';
import { CoreStateModule } from '@angular-monorepo/core-state';
import { UiToolbarModule } from '@angular-monorepo/ui-toolbar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookPageComponent } from './pages/book-page/book-page.component';


@NgModule({
  declarations: [AppComponent, BookPageComponent, BooksListComponent, BookDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AntDesignModule,
    UiToolbarModule,
    CoreDataModule,
    CoreStateModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
