import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {
  private urlCountries = 'https://restcountries.eu/rest/v2/all';

  constructor( private http: HttpClient) { }

  getlistCountries() {
    // We need to subscribe in the compononet countries
    return this.http.get( this.urlCountries );
  }
}
