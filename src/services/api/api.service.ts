import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  private apiUrl: string = environment.apiUrl;

  request<T>(method: string, url: string, data?: any) : Observable<T> {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.request<T>(method, this.apiUrl + url, {body: data, headers: headers});
  }
}
