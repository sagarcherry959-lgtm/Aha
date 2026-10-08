import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tamiltimelessclassics } from '../models/tamiltimelessclassics';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicsService {
private baseUrl = "http://localhost:8081/api/v1/tamiltimelessclassicsdata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Tamiltimelessclassics[]> {
    return this.http.get<Tamiltimelessclassics[]>(this.baseUrl);
  }
}
