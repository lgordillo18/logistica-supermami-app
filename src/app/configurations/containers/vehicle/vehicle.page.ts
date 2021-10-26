import { Component, OnInit } from "@angular/core";
import { VehicleService } from "../../services/vehicles.service";

@Component({
    selector :'create-vehicle',
    templateUrl: './vehicle.page.html',
    styleUrls: ['./vehicle.page.scss']
})
export class VehiclePage implements OnInit {
    public brandList: any[];
    public statusList: any[];

    constructor (private vehicleService: VehicleService) {}


    ngOnInit() {
        this.brandList = [{id: '1', title: 'Scania'},{id: '2', title: 'Ford'},{id: '3', title: 'Fiat'}];
        this.statusList = [{id: '1', title: 'En servicio'},{id: '2', title: 'Libre'},{id:'3', title: 'En reparación'}];
    }

    vehicleEvent(params) {

    }
}

