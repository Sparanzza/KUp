import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-submenu',
  templateUrl: './btn-submenu.component.html',
  styleUrls: ['./btn-submenu.component.scss']
})
export class BtnSubmenuComponent implements OnInit {
  @Input() btnText: string;
  @Input() btnImgUrl: string;
  bLightClicked = false;

  constructor() { }

  ngOnInit() {
    console.log(this.btnImgUrl);
  }

  btnTouchstart() {
    console.log('submenu');
    this.bLightClicked = true;
  }

  btnTouchend() {
    this.bLightClicked = false;
  }


}
