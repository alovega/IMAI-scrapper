import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, retry, throwError } from 'rxjs';

import { Profile,ProfileData } from './profile';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private apiUrl ='http://localhost:9401';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getProfile(profile: Profile): Observable<ProfileData> {
    console.log(JSON.stringify(profile))
    return this.http
      .post<ProfileData>(
        this.apiUrl + '/api/profile',
        JSON.stringify(profile),
        this.httpOptions
      ).pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
