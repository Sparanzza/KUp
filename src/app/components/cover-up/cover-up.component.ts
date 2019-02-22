import {  Component,
          AfterViewInit,
          ChangeDetectorRef,
          EventEmitter,
          Output } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cover-up',
  templateUrl: './cover-up.component.html',
  styleUrls: ['./cover-up.component.scss']
})
export class CoverUpComponent implements AfterViewInit {

  @Output() nationality: EventEmitter<any> = new EventEmitter<any>();
  coverHeight = 0;
  isLoading = false;
  showFlags = true;
  showConditions = false;
  countries: any;


  constructor(
    private cdRef: ChangeDetectorRef,
    private cs: RestCountriesService) {
   }

  ngAfterViewInit() {
    // https://stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
    timer(100).subscribe( () => {
      this.coverHeight = 90;
      this.cdRef.detectChanges();
      this.isLoading = true;
     });


    timer(500).subscribe( () => {
      timer(200).subscribe( () => {
        this.cs.getlistCountries().subscribe( countries => {
          this.countries = countries;
          this.isLoading = false;
          });
        this.cdRef.detectChanges();
      });
    });

  }
  setNationality( event ) {
    this.showFlags = false;
    this.showConditions = true;
    this.nationality.emit( event );
  }

    acceptCondition() {
      this.coverHeight = 0;
    }

}
