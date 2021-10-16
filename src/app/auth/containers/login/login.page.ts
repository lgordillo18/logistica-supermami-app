import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  @Input() loginStyle: string = 'normal';
  @Output() changeTabEvent = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(route) {
    if (this.loginStyle !== 'normal') {
      return this.changeTabEvent.emit({ changeTab: 'form' });
    }

    this.router.navigate([route]);
  }

  login() {
    
  }
}




