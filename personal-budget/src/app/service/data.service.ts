import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

const apiURL = 'http://localhost:3000/budget';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {  }

  getBudget(): Observable<any[]> {
    return this.httpClient.get<any[]>(apiURL);
  }

}
