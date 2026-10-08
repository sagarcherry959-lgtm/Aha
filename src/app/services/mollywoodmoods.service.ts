import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mollywoodmoods } from '../models/mollywoodmoods';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodsService {
  private baseUrl = "http://localhost:8081/api/v1/mollywoodmoodsdata"; // Replace with your actual API endpoint
  constructor(private http: HttpClient) { }
  onsubmit(): Observable<Mollywoodmoods[]> {
    return this.http.get<Mollywoodmoods[]>(this.baseUrl);
  }
}
