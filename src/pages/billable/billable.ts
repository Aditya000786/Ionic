import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskDetailPage } from '../pages';

/**
 * Generated class for the BillablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-billable',
  templateUrl: 'billable.html',
})
export class BillablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillablePage');
  }
   tasks=[
    { id:1,name: 'B.Task 1'},
    { id:2,name: 'B.Task 2'},
    { id:3,name: 'B.Task 3'},
  ];

  taskDetailPage($event,task){
//    this.navCtrl.push(TaskDetailPage,task);
//      this.navCtrl.popToRoot();
      this.navCtrl.parent.parent.push(TaskDetailPage,task);
  }
}
