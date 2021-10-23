import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'create-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UsersPage implements OnInit {
  public officeList: any[];
  public rolList: any[];
  public areaList: any[];
  public vehicleList: any[];

  constructor(private usersService: UserService) { }
//  private offices = 

  ngOnInit() {
    this.officeList = [{id: '1', title: 'Suc. San Vicente'},{id: '2', title: 'Suc. Salsipuedes'},{id: '3', title: 'Suc. Rodriguez del Busto'}];
    this.rolList = [{id: '1', title: 'Empleado'},{id: '2', title: 'Repartidor'},{id: '3', title: 'Administrador'}]
    this.areaList = [{id: '1', title: 'Ventas'},{id: '2', title: 'Stock'},{id: '3', title: 'Compras'}]
    this.vehicleList = [{id: '1', title: 'Kangoo'},{id: '2', title: 'Suran'},{id: '3', title: 'Fiorino'}]
  }

  userEvent(params) {
    // Aca iria el subscribe para crear un user
  }

}