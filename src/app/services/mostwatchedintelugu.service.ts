import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mostwatchedintelugu } from '../models/mostwatchedintelugu';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedinteluguService {
private baseUrl = "http://localhost:8081/api/v1/mostwatchedintelugudata"; // Replace with your actual API endpoint
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Mostwatchedintelugu[]> {
    return this.http.get<Mostwatchedintelugu[]>(this.baseUrl);
  }
}
