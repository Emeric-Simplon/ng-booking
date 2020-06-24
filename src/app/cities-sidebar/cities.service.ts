import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public host: String = "http://localhost:3000/";


  constructor(private http: HttpClient) { }

  public getCitiess(): Observable<any> {
    return this.http.get(this.host + "cities");
  }

}
