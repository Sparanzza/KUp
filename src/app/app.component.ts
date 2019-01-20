import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { timer } from 'rxjs/observable/timer';

import { HomePage } from '../pages/home/home'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  showSplash = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Es un timer que pondrá a false para quitar el splash en la 
      // Etiqueta div con el ngIf
      timer(3000).subscribe( () => {
        this.showSplash = false;
      });
    });
  }
}

