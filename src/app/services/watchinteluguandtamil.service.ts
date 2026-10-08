import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WatchinteluguandtamilService {
private baseUrl = "http://localhost:8081/api/v1/watchinteluguandtamildata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Watchinteluguandtamil[]> {
    return this.http.get<Watchinteluguandtamil[]>(this.baseUrl);
  }
}
