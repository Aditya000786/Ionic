import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskDetailPage } from '../pages';


/**
 * Generated class for the NonBillablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-non-billable',
  templateUrl: 'non-billable.html',
})
export class NonBillablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NonBillablePage');
  }
   tasks=[
    { id:1,name: 'NB.Task 1'},
    { id:2,name: 'NB.Task 2'},
    { id:3,name: 'NB.Task 3'},
  ];

  taskDetailPage($event,task){
    this.navCtrl.push(TaskDetailPage,task);
  }
}
