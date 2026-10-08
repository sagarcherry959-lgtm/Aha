import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inthespotlight } from '../models/inthespotlight';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
  private baseUrl = "http://localhost:8081/api/v1/inthespotlightdata"; 
    constructor(private http: HttpClient) { }
    onsubmit(): Observable<Inthespotlight[]> {
      return this.http.get<Inthespotlight[]>(this.baseUrl);
    }

  
}
