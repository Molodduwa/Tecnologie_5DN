import { Injectable } from '@angular/core';
import { Auto } from './models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  autoS: Auto[];
  autoSuv: Auto[];
  autoCompattes: Auto[];
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  // Make the HTTP request:
  this.http.get('/api').subscribe(data => {
  // Read the result field from the JSON response.
  this.autoS = data["Auto Sportive"];
  this.autoSuv = data["Auto SUV"];
  this.autoCompattes=data["Auto Compatte"];
  });
  }
}
