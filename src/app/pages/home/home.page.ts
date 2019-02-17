import { Component, OnInit } from '@angular/core';
import { LoadingStartService } from '../../services/loading-start.service';
import { timer } from 'rxjs';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  progressBarValue = 0; // value progressBar local got from service
  isloadingEnd = false; // this var remove progress bar when finish
  isLoadStartOk = false; // check whether pass all functions from service
  isLogin = false;
  constructor(
    private androidFullScreen: AndroidFullScreen,
    public lss: LoadingStartService) {
    console.log( 'init HomePage');
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => console.log('Immersive mode supported'))
    .catch(err => console.log(err));

  }
  // Life cycle Ionic 4
  // https://medium.com/@paulstelzer/ionic-4-and-the-lifecycle-hooks-4fe9eabb2864
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

    this.lss.checkConnection();

    timer(500).subscribe( () => {
        this.progressBarValue = 100;
    });

    timer(2000).subscribe( () => {
        this.isloadingEnd = true;
    });
  }

  clickLogin(e) {
    console.log(e);
    this.isLogin = true;
  }
  clickGuest(e) {
    console.log(e);
  }
}

// https://github.com/ionic-team/ionic-cli/issues/559
// rm -rf platforms/ plugins/
// cordova prepare
