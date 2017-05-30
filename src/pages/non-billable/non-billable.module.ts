import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonBillablePage } from './non-billable';

@NgModule({
  declarations: [
    NonBillablePage,
  ],
  imports: [
    IonicPageModule.forChild(NonBillablePage),
  ],
  exports: [
    NonBillablePage
  ]
})
export class NonBillablePageModule {}
