import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { ProjectsPage } from '../pages/pages';
import { EditProjectPage } from '../pages/pages';
import { ViewProjectPage } from '../pages/pages';
import { LogPage } from '../pages/pages';
import { TaskPage } from '../pages/pages';
import { TimerPage } from '../pages/pages';
import { ReminderPage } from '../pages/pages';
import { SummaryPage } from '../pages/pages';
import { AccountPage } from '../pages/pages';
import { SettingsPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProjectsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   /* this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
*/
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  projectsPage(){
    this.nav.push(ProjectsPage);
  }

  summaryPage(){
    this.nav.push(SummaryPage)
  }

  accountPage(){
    this.nav.push(AccountPage);
  }

  settingsPage(){
    this.nav.push(SettingsPage);
  }
  
  newProjectPage(){
    this.nav.push(EditProjectPage);
  }
}
