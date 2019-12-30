import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private baseUrl:string = "https://api.github.com";

  constructor(
    private http: HttpClient
  ) { }

  public getPulls() {
    return this.http.get(`${this.baseUrl}/rails/rails/pulls`);
  }
}
