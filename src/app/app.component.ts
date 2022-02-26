import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Your Tickets';
  constructor(private http: HttpClient, private auth: AuthService){
  }


  isLoggedIn=this.auth.isLoggedIn


} 
