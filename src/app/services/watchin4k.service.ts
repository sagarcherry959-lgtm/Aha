import { Injectable } from '@angular/core';
import { Watchin4k } from '../models/watchin4k';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Watchin4kService {

  private baseUrl = "http://localhost:8081/api/v1/watchin4kdata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Watchin4k[]> {
    return this.http.get<Watchin4k[]>(this.baseUrl);
  }
}
