import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-cover-up',
  templateUrl: './cover-up.component.html',
  styleUrls: ['./cover-up.component.scss']
})
export class CoverUpComponent implements AfterViewInit {
  coverHeight = 0;
  isLoading = false;
  constructor(
    private cdRef: ChangeDetectorRef,
    private cs: RestCountriesService) {
   }

  ngAfterViewInit() {
    // https://stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
    console.log('ngAfterViewInit');
    this.cs.getlistCountries().subscribe( countries => {
      this.isLoading = true;
      console.log(countries);
      this.cdRef.detectChanges();
      this.coverHeight = 90;
      this.isLoading = false;
    });

  }

}
