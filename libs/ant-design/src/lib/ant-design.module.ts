import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzCardModule,
    NzGridModule,
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule
  ]
})
export class AntDesignModule {}
