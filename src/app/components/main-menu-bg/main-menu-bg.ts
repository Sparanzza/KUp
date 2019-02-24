import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'main-menu-bg',
  templateUrl: 'main-menu-bg.html',
  styleUrls: ['main-menu-bg.scss']
})
export class MainMenuBgComponent implements DoCheck {

  constructor() { }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

}
