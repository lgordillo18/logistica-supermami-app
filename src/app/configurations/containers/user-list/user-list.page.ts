import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'user-list-page',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss']
})
export class UsersListPage implements OnInit {
  public userList: any[];
  public textConfig = { primaryText: 'full_name', secondaryText: 'username', tertiaryText: 'rol' };

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.userList = [
      {
        first_name: 'Lucas',   
        last_name: 'Gordillo',
        full_name: 'Lucas Gordillo',
        username: 'lgordillo',
        rol: 'Repartidor'
      },
      {
        first_name: "gonzalo",
        last_name: "miranda",
        full_name: 'Gonzalo Miranda',
        username: 'gmiranda',
        rol: 'Empleado'
      }
    ];
  }

  editUser(userId) {
    // Aca iria el endpoint para editar
  }

  removeUser(userId) {
    // Aca iria el endpoint para borrar
  }

  // getUsers() {
  //   this.usersService.getUsers().subscribe(users => {
  //     this.userList = users;
  //     console.log(this.users);
  //   })
  // }
}