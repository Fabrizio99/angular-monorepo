import { AntDesignModule } from '@angular-monorepo/ant-design';
import { CoreDataModule } from '@angular-monorepo/core-data';
import { UiToolbarModule } from '@angular-monorepo/ui-toolbar';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';


registerLocaleData(es);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, AntDesignModule, UiToolbarModule, CoreDataModule],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
