import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'how-to-play',
  templateUrl: './how-to-play.page.html',
  styleUrls: ['./how-to-play.page.scss'],
})
export class HowToPlayPage implements OnInit {

  @Output() howToPlay: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  clickHowTo(e) {
    this.howToPlay.emit(e);

  }

}
