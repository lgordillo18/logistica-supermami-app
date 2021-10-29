import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from "../../models/vehicle.interface";

@Component({
    selector: 'vehicle-component',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.scss']
})

export class CreateVehicleComponent implements OnInit {

    @Input() arrayList: any[];
    @Input() arrayList1: any[];
    @Output() newVehicle = new EventEmitter<Vehicle>();
    
    public createVehicleForm: FormGroup = new FormGroup({
        patent: new FormControl('', Validators.required),
        vehicleBrand: new FormControl('', Validators.required),
        vehicleModel: new FormControl('', Validators.required),
        vehicleYear: new FormControl('', Validators.required),
        kg: new FormControl('', Validators.required),
        vehicleStatus: new FormControl('', Validators.required)
    });

    constructor() {}

    ngOnInit() {}

    createVehicle() {
        const values = this.createVehicleForm.value;
        this.newVehicle.emit(values);
    }
}