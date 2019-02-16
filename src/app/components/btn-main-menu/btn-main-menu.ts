import { Component, Input } from '@angular/core';

/**
 * Generated class for the BtnMainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'btn-main-menu',
  templateUrl: 'btn-main-menu.html',
  styleUrls: ['btn-main-menu.scss']
})
export class BtnMainMenuComponent {
  @Input() iWidth = 243;
  @Input() btnText: string;
  public bLightClicked: boolean;

  constructor() {
    this.bLightClicked = false;
  }

  btnTouchstart() {
    this.bLightClicked = true;
  }

  btnTouchend() {
    this.bLightClicked = false;
  }

}
