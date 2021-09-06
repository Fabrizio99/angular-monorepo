import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzCardModule,
    NzGridModule
  ]
})
export class AntDesignModule {}
