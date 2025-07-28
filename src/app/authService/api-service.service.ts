import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../core/config/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiURL:any
  constructor( private http: HttpClient,

  ) {

    
   }

     signUp(SignUpRequest:any): Observable<any> {
      console.log(environment.apiUrl+'/auth/register')
    return this.http.post<any>(environment.apiUrl+'/auth/register', SignUpRequest);
  }
}
