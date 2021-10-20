import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../auth/services/token.service'; 
import { UserService } from '../../services/user.service' 
import { Router } from '@angular/router';
import { NewUser } from '../../../models/user';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'create-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  newUser: NewUser;
  firstName: string;
  lastName: string;
  user: string;
  dni: number;
  cellphone: number;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  createUser(): void {
    this.newUser = new NewUser(this.firstName, this.lastName, this.user, this.dni, this.cellphone, this.email, this.password);
    this.userService.setUser(this.newUser).subscribe(
      data => {
        console.log('Usuario Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.router.navigate(['/tabs']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        console.error(this.errMsj, 'Fail', {
          timeOut: 3000,
        });
        // console.log(err.error.message);
      }
    );
  }

}


