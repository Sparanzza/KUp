import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';
import { Nationality } from '../../interfaces/country.interface';

@Component({
  selector: 'app-google-account',
  templateUrl: './google-account.component.html',
  styleUrls: ['./google-account.component.scss']
})
export class GoogleAccountComponent implements OnInit {

  @Output() closeAccount: EventEmitter<any> = new EventEmitter<any>();
  isNationalityPushed = false;
  gotUser = false;
  nationality = new Nationality();
  coverHeight = 0;

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

  clickNationality() {
    this.isNationalityPushed = true;
  }

  setNationalityUser(event) {
    this.nationality.numericCode = event.numericCode;
    this.nationality.name = event.name;
    this.nationality.codename = event.alpha2Code;
    this.nationality.flag = event.flag;
    console.log( this.nationality);
  }

  setConditions(event) {
    console.log(`conditions ${event}`);
    // If accept the conditions
    if ( event === 'ACCEPT_CONDITIONS') {
      // Save nationality
      // Set Icon Nationatily
      // Save the user with all data in farebase
    }
    if ( event === 'DECLINE_CONDITIONS') {
      // delete user data temp
      // come back to main menu
    }

    // Close animation
    setTimeout(() => {
      console.log('cerrar cover');
      // https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
      this.coverHeight = 0; // Not Work!
      this.closeAccount.emit();
      setTimeout(() => {     }, 600);
        // this.isNationalityPushed = false;
    }, 600);
  }


}
