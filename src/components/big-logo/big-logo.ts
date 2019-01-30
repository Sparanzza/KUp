import { Component } from '@angular/core';

/**
 * Generated class for the BigLogoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'big-logo',
  templateUrl: 'big-logo.html'
})
export class BigLogoComponent {

  text: string;

  constructor() {
    console.log('Hello BigLogoComponent Component');
    this.text = 'Hello World';
  }

}
