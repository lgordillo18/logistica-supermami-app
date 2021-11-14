import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginEvent(params) {
    // this.authService.validateUser({ username: params.username, password: params.password }).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.showLoginErrorAlert();
    //   }
    // );

    if (params.username === 'empleado' && params.password === '12345') {
      localStorage.setItem('current_employee_id', '1');
      localStorage.setItem('current_employee_rol', 'empleado');
      localStorage.setItem('current_office_id', '1');
    } else if (params.username === 'encargado' && params.password === '12345') {
      localStorage.setItem('current_employee_id', '2');
      localStorage.setItem('current_employee_rol', 'encargado');
      localStorage.setItem('current_office_id', '2');
    } else if (params.username === 'repartidor' && params.password === '12345') {
      localStorage.setItem('current_employee_id', '3');
      localStorage.setItem('current_employee_rol', 'repartidor');
      localStorage.setItem('current_office_id', '2');
    } else if (params.username === 'admin' && params.password === '12345') {
      localStorage.setItem('current_employee_id', '4');
      localStorage.setItem('current_employee_rol', 'encargado');
      localStorage.setItem('current_office_id', '1');
    } else {
      return this.showLoginErrorAlert();
    }

    this.goToMainPage();
  }

  private goToMainPage() {
    this.router.navigate(['/tabs/tickets']);
  }

  private async showLoginErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario y/o contraseña incorrectos',
      buttons: ['OK']
    });
    await alert.present();
  }
}