import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Latestreleses } from '../models/latestreleses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestrelesesService {
  private baseUrl = "http://localhost:8081/api/v1/latestrelesesdata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Latestreleses[]> {
    return this.http.get<Latestreleses[]>(this.baseUrl);
  }
}
