import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  loginEvent(params) {
    // Aqui debe ir el subscribe para pegarle al post (/login)
    console.log(params);
  }
}




