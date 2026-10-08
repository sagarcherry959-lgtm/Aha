import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ahaoriginals } from '../models/ahaoriginals';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AhaoriginalsService {
private baseUrl = "http://localhost:8081/api/v1/ahaoriginalsdata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Ahaoriginals[]> {
    return this.http.get<Ahaoriginals[]>(this.baseUrl);
  }
}
