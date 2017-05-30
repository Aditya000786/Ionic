import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillablePage,NonBillablePage } from '../pages';

/**
 * Generated class for the ViewProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-project',
  templateUrl: 'view-project.html',
})
export class ViewProjectPage {

  project:any;
  billableTab=BillablePage;
  nonBillableTab=NonBillablePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project=this.navParams.data;
    console.log('**navparams: ',this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProjectPage');
  }  
}
