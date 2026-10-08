import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Handpickedforyou } from '../models/handpickedforyou';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandpickedforyouService {

  private baseUrl = "http://localhost:8081/api/v1/handpickedforyoudata";
    constructor(private http: HttpClient) { }
    onsubmit(): Observable<Handpickedforyou[]> {
      return this.http.get<Handpickedforyou[]>(this.baseUrl);
    }
}
