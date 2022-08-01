import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private routerService : RouterService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.username == "" || this.password == ""){
      this.errorMessage = "Username and Password cannot be left blank";
    } else{
      this.errorMessage = "";
      let token: any = this.authService.authenticateUser(this.username, this.password);
      this.authService.setToken(token);
      this.routerService.routeToDashboard();
      if (!this.authService.isAuthenticated(token)){
        this.errorMessage = "Username or Password is invalid."
      }
    }
    
  }

}
