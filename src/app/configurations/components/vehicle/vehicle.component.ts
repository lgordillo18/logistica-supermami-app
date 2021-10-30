import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { combineLatest } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';
import { take } from 'rxjs/operators';
import { LoadingHelper } from 'src/app/shared/helpers/loading.helper';

@Component({
  selector: 'vehicle-component',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})

export class VehicleComponent implements OnInit, AfterViewInit {
  @Input() vehicleData: any;

  public vehicleForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    patent: new FormControl('', Validators.required),
    vehicleBrand: new FormControl('', Validators.required),
    vehicleModel: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    kg: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    employees: new FormControl('', Validators.required)
  });

  public allStatus = [];
  public allDealers = [];
  
  constructor(
    private vehiclesService: VehicleService,
    private loadingHelper: LoadingHelper,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    //this.loadingHelper.present();
    this.getAllComboboxData();
  }

  ngAfterViewInit() {
    if (this.vehicleData) {
      if (this.vehicleData.id) {
        this.vehicleForm.get('id').setValue(this.vehicleData.id);
      }
      if (this.vehicleData.patent) {
        this.vehicleForm.get('patent').setValue(this.vehicleData.patent);
      }
      if (this.vehicleData.vehicleBrand) {
        this.vehicleForm.get('vehicleBrand').setValue(this.vehicleData.vehicleBrand);
      }
      if (this.vehicleData.vehicleModel) {
        this.vehicleForm.get('vehicleModel').setValue(this.vehicleData.vehicleModel);
      }
      if (this.vehicleData.year) {
        this.vehicleForm.get('yearear').setValue(this.vehicleData.vehicleYear);
      }
      if (this.vehicleData.kg) {
        this.vehicleForm.get('kg').setValue(this.vehicleData.kg);
      }
    }
  }

  private async getAllComboboxData() {
    combineLatest(this.vehiclesService.getStatus(), this.vehiclesService.getDealers()).pipe(take(1)).subscribe(async ([status, employees]) => {
      this.allStatus = status ? status : [];
      this.allDealers = employees ? employees : [];
      //this.loadingHelper.dismiss();
    });
  }

  createVehicle() {
    this.dismiss('new', this.vehicleForm.value);
  }

  editVehicle() {
    this.dismiss('edit', this.vehicleForm.value);
  }

  cancel() {
    this.dismiss('');
  }

  private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
  }
}