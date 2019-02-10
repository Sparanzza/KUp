import { Component, OnInit } from '@angular/core';
import { LoadingStartService } from '../../services/loading-start.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  progressBarValue = 0; // value progressBar local got from service

  constructor( public lss: LoadingStartService) {
    console.log( 'init HomePage');
  }
  // Life cycle Ionic 4
  // https://medium.com/@paulstelzer/ionic-4-and-the-lifecycle-hooks-4fe9eabb2864
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.progressBarValue = this.lss.percent;
    this.lss.loadingGameInit().subscribe( () => {
      this.progressBarValue = 99.4;
    });
  }
}
