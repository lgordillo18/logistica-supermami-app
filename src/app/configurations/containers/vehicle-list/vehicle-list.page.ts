import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
})
export class VehicleListPage implements OnInit {
  public vehicleList: any[];
  public textConfig = { primaryText: 'full_name', secondaryText: 'username', tertiaryText: 'rol' };
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleList = [
      {
        id: 1,
        patente: 'awd 123',
        id_marca: 3,
        id_modelo: 3,
        anio: '1950',
        id_estado: 2
      },
      {
        id: 4,
        patente: 'ggg 567',
        id_marca: 2,
        id_modelo: 1,
        anio: '2001',
        id_estado: 2
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


