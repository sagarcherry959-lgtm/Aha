import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Telugutimelessclassics } from '../models/telugutimelessclassics';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TelugutimelessclassicsService {

 private baseUrl = "http://localhost:8081/api/v1/telugutimelessclassicsdata";
   constructor(private http: HttpClient) { }
   onsubmit(): Observable<Telugutimelessclassics[]> {
     return this.http.get<Telugutimelessclassics[]>(this.baseUrl);
   }
}
