import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = '';

  constructor(private http: HttpClient) { }

  // Generic GET method
  get<T> (endpoint: string): Observable<T> {
    return this.http.get<T>(`${ this.baseUrl }/${ endpoint }`);
  }

  // GET by ID method
  getById<T> (endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${ this.baseUrl }/${ endpoint }/${ id }`);
  }

  // Generic POST method
  post<T> (endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${ this.baseUrl }/${ endpoint }`, data);
  }

  // PUT method
  put<T> (endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${ this.baseUrl }/${ endpoint }`, data);
  }

  // DELETE method
  delete<T> (endpoint: string): Observable<T> {
    return this.http.delete<T>(`${ this.baseUrl }/${ endpoint }`);
  }
}
