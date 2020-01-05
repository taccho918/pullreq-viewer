import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private baseUrl: string = "https://api.github.com";

  constructor(
    private http: HttpClient
  ) { }

  public getPulls(owner: string, repo: string): Observable<any>{
    const params = new HttpParams().set('per_page', '50').set('state', 'open');
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}/pulls`, { observe: 'response', params: params })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // todo: error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened');
  };
}
