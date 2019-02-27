import {  Component,
          AfterViewInit,
          ChangeDetectorRef,
          EventEmitter,
          Output, Input } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cover-up',
  templateUrl: './cover-up.component.html',
  styleUrls: ['./cover-up.component.scss']
})
export class CoverUpComponent implements AfterViewInit {

  @Input() coverHeight;
  @Output() nationality: EventEmitter<any> = new EventEmitter<any>();
  @Output() conditions: EventEmitter<any> = new EventEmitter<any>();
  isLoading = false;
  showFlags = true;
  showConditions = false;
  countries: any;
  conditionsText: any;

  constructor(
    private cdRef: ChangeDetectorRef,
    private cs: RestCountriesService) {
      this.conditionsText = this.readTextFile('./assets/conditions.txt');
      console.log(this.conditionsText);
   }

  ngAfterViewInit() {
    // https://stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
    timer(100).subscribe( () => {
      this.coverHeight = 85;
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

   setConditions( event ) {
      this.showConditions = false;
      this.isLoading = true;
      this.conditions.emit( event );
    // this.coverHeight = 0;
  }

  readTextFile(file) {
    const rawFile = new XMLHttpRequest();
    // XMLHttpRequest (often abbreviated as XHR)
    rawFile.open('GET', file, false); // open with method GET the file with the link file ,  false (synchronous)
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200) {
                return rawFile.responseText; //  Returns the response data as a string
                // console.log(this.conditionsText); // display text on the console
            }
        }
    };
    rawFile.send(null);
  }

}
