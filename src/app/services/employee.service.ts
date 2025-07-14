import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7151/api/employee';

  constructor(private http: HttpClient) {}

  getEmployees(name?: string, title?: string) {
    let params = {};
    if (name) params = { ...params, name };
    if (title) params = { ...params, title };
    return this.http.get<Employee[]>(this.apiUrl, { params });
  }

  addEmployee(payload: any) {
    return this.http.post(this.apiUrl, payload);
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
