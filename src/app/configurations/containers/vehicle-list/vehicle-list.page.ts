import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
})
export class VehicleListPage implements OnInit {
  public vehicleList: any[];
  public textConfig = { primaryText: 'full_name', secondaryText: 'username', tertiaryText: 'rol' };
  constructor() { }

  ngOnInit() {
    this.vehicleList = [
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

  editVehicle(userId) {
    // Aca iria el endpoint para editar
  }

  removeVehicle(userId) {
    // Aca iria el endpoint para borrar
  }

  // getVehiculos() {
  //   this.usersService.getUsers().subscribe(users => {
  //     this.userList = users;
  //     console.log(this.users);
  //   })
  // }
}


