import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStartService {

  percent = 0;
  constructor() {
    console.log('init LoadingStartService');
  }

  // Init loading start page game
  loadingGameInit()  {
    // Conection to internert WIFI or data


    // Connection to firebase to check if It may to check the user

    // Check if we have the user in the database

    // Get information user

    // save to local storage

    // send to main menu

    // If no exist user, set menu to guest o login to google.

    // Guest need generate random username, no need to save data in fire

    // if Google selected implement function to insert new user

    return timer(1000);
  }

}
