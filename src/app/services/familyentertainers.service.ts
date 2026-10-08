import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Familyentertainers } from '../models/familyentertainers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyentertainersService {

    private baseUrl = "http://localhost:8081/api/v1/familyentertainersdata";
    constructor(private http: HttpClient) { }
    onsubmit(): Observable<Familyentertainers[]> {
      return this.http.get<Familyentertainers[]>(this.baseUrl);
    }
}
