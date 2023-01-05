import { Component } from '@angular/core';

@Component({
  selector: 'app-home-head',
  templateUrl: './home-head.component.html',
  styleUrls: ['./home-head.component.css']
})
export class HomeHeadComponent {
  alertLogin(){
    alert("login")
  }

  alertSignUp(){
    alert("Sign Up")
  }
}
