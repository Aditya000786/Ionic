import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {
  task:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task=this.navParams.data;
    console.log('**navParams:',this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailPage');
  }

  
}
