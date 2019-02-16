import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-google-account',
  templateUrl: './google-account.component.html',
  styleUrls: ['./google-account.component.scss']
})
export class GoogleAccountComponent implements OnInit {

  gotUser = false;
  constructor( public sys: SystemService) { }

  ngOnInit() {
    // get Device
    if (this.sys.plt.is('iphone')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
    }
    if (this.sys.plt.is('android')) {
      // This will only print when on iOS
      console.log('I am an android device!');
    }
    // get User from google play or apple
    // if get user who the panel with data and option to nationality
    this.gotUser = true;
  }

}
