import { AntDesignModule } from '@angular-monorepo/ant-design';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, AntDesignModule],
  declarations: [
    ToolbarComponent
  ],
  exports: [ToolbarComponent],
})
export class UiToolbarModule {}
