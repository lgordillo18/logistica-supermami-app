export class NewVehicle {
    patent: string;
    vehicleBrand: string;
    vehicleModel: string;
    kg: number;
    year: number;
    vehicleStatus: {};
    employee: {};

    constructor( vehicle ) {
        this.patent = vehicle.patent;
        this.vehicleBrand = vehicle.vehicleBrand;
        this.vehicleModel = vehicle.vehicleModel;
        this.kg = vehicle.kg;
        this.year = vehicle.year;
        this.vehicleStatus = { id: vehicle.status };
        this.employee = { id: vehicle.employees};
    }
}
      
  