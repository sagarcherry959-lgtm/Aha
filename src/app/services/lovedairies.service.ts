import { HttpClient } from '@angular/common/http';
import { Lovedairies } from '../models/lovedairies';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LovedairiesService {

  private baseUrl = "http://localhost:8081/api/v1/lovedairiesdata";
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Lovedairies[]> {
    return this.http.get<Lovedairies[]>(this.baseUrl);
  }
}
