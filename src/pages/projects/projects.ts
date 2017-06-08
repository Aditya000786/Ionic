import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewProjectPage} from '../pages';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharingVar:SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  projects=[
    {id:1,name:'Project 1'},
    {id:2,name:'Project 2'},
    {id:3,name:'Project 3'}
  ];
  viewProject($event,project){
    this.navCtrl.push(ViewProjectPage,project);
  }

 whatsappShare(){
  this.sharingVar.shareViaWhatsApp("Message via Whatsapp", null,"http://pointdeveloper.com/")
  .then(()=>{
    alert("Sucess");
  },
  ()=>{
    alert("failed");
  })
}

}
