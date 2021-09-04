import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzLayoutModule
  ]
})
export class AntDesignModule {}
