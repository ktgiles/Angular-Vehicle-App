import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticateUser(username: string, password : string){
    if (username == "admin" && password == "password"){
      return "Bearer valid.user.token";
    }
    else {
      return "invalid user";
    }
  }

  isAuthenticated(token : string){
    if (token == "Bearer valid.user.token"){
      return true;
    } else {
      return false;
    }
  }

  setToken(token : string){
    localStorage.setItem("bearerToken", token);
    }

  getToken(): any {
    return localStorage.getItem("bearerToken");
  }
}
