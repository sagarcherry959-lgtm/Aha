import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mostwatchedintamil } from '../models/mostwatchedintamil';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedintamilService {

  private baseUrl = "http://localhost:8081/api/v1/mostwatchedintamildata"; // Replace with your actual API endpoint
    constructor(private http: HttpClient) { }
    onsubmit(): Observable<Mostwatchedintamil[]> {
      return this.http.get<Mostwatchedintamil[]>(this.baseUrl);
    }
}
