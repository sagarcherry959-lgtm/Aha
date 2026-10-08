import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchforfree } from '../models/watchforfree';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WatchforfreeService {
private baseUrl = "http://localhost:8081/api/v1/watchforfreedata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Watchforfree[]> {
    return this.http.get<Watchforfree[]>(this.baseUrl);
  }
}
