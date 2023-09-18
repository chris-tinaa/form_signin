import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private baseURL: string = "https://fakestoreapi.com/auth/login";
  constructor(private http: HttpClient) { }

  public signin(user: Iuser): Observable<any> {
    const headers = {
      "Content-Type": "application/json"
    };
    const body = JSON.stringify(user);
    const resp = this.http.post<any>(this.baseURL, body, {headers});

    return resp;
  }
}
