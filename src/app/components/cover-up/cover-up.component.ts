import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-cover-up',
  templateUrl: './cover-up.component.html',
  styleUrls: ['./cover-up.component.scss']
})
export class CoverUpComponent implements AfterViewInit {
  coverHeight = 0;
  isLoading = false;
  countries: any;

  constructor(
    private cdRef: ChangeDetectorRef,
    private cs: RestCountriesService) {
   }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.isLoading = true;
    // https://stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
    this.cs.getlistCountries().subscribe( countries => {
      this.isLoading = false;
      this.countries = countries;
      console.log(countries);
      timer(200).subscribe( () => {
      });
      this.coverHeight = 90;
      this.cdRef.detectChanges();
    });

  }

}
