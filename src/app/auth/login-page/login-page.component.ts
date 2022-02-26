import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isLoggedIn: any;
  user = '1';
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private route: Router
  ) {}
  ngOnInit(): void {
    localStorage.setItem('SeesionUser', this.user);
  }

  users = ['ritvik', 'quala', 'travel'];
  passwords = ['test', 'pass', 'pass'];
  username = 'ritvik';
  password = 'pass';

  getData(data: any) {
    if (1) {
      this.auth.login();
      console.log(data);
    } else console.log('Invalid Token');
  }

  userCreds = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  logoutClick() {
    window.alert('Logged out');
    this.auth.logout();
  }

  loginClick() {
    console.log(this.userCreds.value);
    // if(this.users.find(element => element==this.userCreds.value.username) && this.passwords.find(element => element==this.userCreds.value.password)){   // }
    
    this.http.get(this.auth.apiURL).subscribe((data) => {
      console.log(data);
    });
    this.redirector()
  }

  redirector() {
    setTimeout(() => {
      if (
        this.auth.user == this.userCreds.value.username &&
        this.auth.pass == this.userCreds.value.password
      ) {
        this.route.navigate(['/forms']);
        this.auth.login();
      }
      
    }, 2000);
  }
}
