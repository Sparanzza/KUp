import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { timer, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class LoadingStartService {

  // Initialize Cloud Firestore through Firebase

  private itemDoc: AngularFirestoreCollection<User>;
  item: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.collection('users');
    this.item = this.itemDoc.valueChanges();

    this.item.subscribe( data => console.log(data));

  }

  // Init loading start page game
  // Conection to internert WIFI or data
  checkConnection() {
    console.log('checkConnection()');
    return true;
  }
  // Connection to firebase to check if It may to check the user
  // Check if we have the user in the database
  // Get information user
  // save to local storage
  // send to main menu
  // If no exist user, set menu to guest o login to google.
  // Guest need generate random username, no need to save data in fire
  // if Google selected implement function to insert new user

}
