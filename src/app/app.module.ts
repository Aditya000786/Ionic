import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { ProjectsPage } from '../pages/pages';
import { EditProjectPage } from '../pages/pages';
import { ViewProjectPage } from '../pages/pages';
import { LogPage } from '../pages/pages';
import { TaskPage } from '../pages/pages';
import { TimerPage } from '../pages/pages';
import { ReminderPage } from '../pages/pages';
import { AccountPage } from '../pages/pages';
import { SettingsPage } from '../pages/pages';
import { SummaryPage } from '../pages/pages';
import { TaskDetailPage } from '../pages/pages';
import { BillablePage } from '../pages/pages';
import { NonBillablePage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
//    HomePage,
//    ListPage
    ProjectsPage,
    BillablePage,
    NonBillablePage,
    EditProjectPage,
    ViewProjectPage,
    LogPage,
    TaskPage,
    TimerPage,
    ReminderPage,
    AccountPage,
    SummaryPage,
    SettingsPage,
    TaskDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    HomePage,
//    ListPage
    ProjectsPage,
    BillablePage,
    NonBillablePage,
    EditProjectPage,
    ViewProjectPage,
    LogPage,
    TaskPage,
    TimerPage,
    ReminderPage,
    AccountPage,
    SummaryPage,
    SettingsPage,
    TaskDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
