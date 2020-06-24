import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public host: String = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public getHotels(): Observable<any> {
    return this.http.get(this.host + "hotels");
  }
  public getHotelById(id: string): Observable<any> {
    return this.http.get(this.host + "hotel/" + id)
  }

  public updtHotel(id: number, body): Observable<any> {
    return this.http.put(this.host + "hotel/" + id, body)
  }
}
