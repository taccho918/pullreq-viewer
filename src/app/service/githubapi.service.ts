import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private baseUrl: string = "https://api.github.com";

  constructor(
    private http: HttpClient
  ) { }

  public getPulls(owner: string, repo: string) {
    console.log(this);
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}/pulls`);
  }

  
}
