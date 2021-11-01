import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  loginEvent(params) {
    if (params.username === 'empleado' && params.password === '12345') {
      localStorage.setItem('current_employee_id', '3');

      this.router.navigate(['/tabs/tickets']);
    } else {
      this.showLoginErrorAlert();
    }
  }

  private async showLoginErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'Usuario y/o contraseña incorrectos',
      buttons: ['OK']
    });
    await alert.present();
  }
}




