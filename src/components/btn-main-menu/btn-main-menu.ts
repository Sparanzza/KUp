import { Component, Input } from '@angular/core';

/**
 * Generated class for the BtnMainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'btn-main-menu',
  templateUrl: 'btn-main-menu.html'
})
export class BtnMainMenuComponent {

  @Input() btnText: string;
  bLightClicked: boolean;

  constructor() {  
    this.bLightClicked = false;
  }

  btnMainMenuClickEvent(){
    // TODO
  }


}
