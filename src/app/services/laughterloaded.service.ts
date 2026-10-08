import { Injectable } from '@angular/core';
import { Laughterloaded } from '../models/laughterloaded';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaughterloadedService {

  private baseUrl = "http://localhost:8081/api/v1/laughterloadeddata";
    constructor(private http: HttpClient) { }
    onsubmit(): Observable<Laughterloaded[]> {
      return this.http.get<Laughterloaded[]>(this.baseUrl);
    }
}
