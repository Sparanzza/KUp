import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(public plt: Platform) {
  }
}
