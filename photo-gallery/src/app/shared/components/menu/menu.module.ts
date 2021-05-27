import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MergeScanSubscriber } from 'rxjs/internal/operators/mergeScan';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MenuModule {}