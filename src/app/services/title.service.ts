import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private apiUrl = 'https://localhost:7151/api/title';

  constructor(private http: HttpClient) {}

  getTitles() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
