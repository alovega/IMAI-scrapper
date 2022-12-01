import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../profile';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl ='http://localhost:9401';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  profile_data = new Subject<[User]>();
  private httpClient: HttpClient;
  constructor(private http: HttpClient, httpBackend: HttpBackend) { 
    this.httpClient = new HttpClient(httpBackend);
  }

  getImage(instagramUrl:any):Observable<any>{
    let url = {url: instagramUrl}
    return this.httpClient.get(this.apiUrl+ '/api/profile/image',{params: url})
  }

}
