import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-outline',
  templateUrl: './btn-outline.component.html',
  styleUrls: ['./btn-outline.component.scss']
})
export class BtnOutlineComponent   {

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
