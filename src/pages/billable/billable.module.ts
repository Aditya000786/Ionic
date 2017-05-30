import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillablePage } from './billable';

@NgModule({
  declarations: [
    BillablePage,
  ],
  imports: [
    IonicPageModule.forChild(BillablePage),
  ],
  exports: [
    BillablePage
  ]
})
export class BillablePageModule {}
