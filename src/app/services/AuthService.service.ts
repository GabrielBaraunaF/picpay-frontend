import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { LoginResponse } from '../models/loginResponse';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private HttpClient: HttpClient,private router:Router) {}



  isLoggedin=signal<boolean>(false);

  private readonly TOKEN_KEY = 'token';

  private url = 'http://localhost:8080/user/';

  login(credentials: any) {
    return this.HttpClient.post<LoginResponse>(this.url, credentials).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem(this.TOKEN_KEY,response.token);
          this.isLoggedin.update(()=>true)
        }
      })
    );
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY)
    this.isLoggedin.update(()=>false)
    this.router.navigate([''])
  }

  getUserData(){
    return this.HttpClient.get<user>(this.url).pipe(
    
    )
  }

}
