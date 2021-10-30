import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NewVehicle } from 'src/app/models/vehicle';
import { VehicleComponent } from '../../components/vehicle/vehicle.component';
import { ListArray } from '../../models/list-array.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'vehicle-list-page',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss']
})
export class VehiclesListPage implements OnInit {
  public arrayList: ListArray[] = [];
  public loading: boolean;

  constructor(
    private vehiclesService: VehicleService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getVehicles();
  }

  editVehicle(vehicleId) {
    this.vehiclesService.getVehicle(vehicleId).subscribe(async (vehicle) => {
      this.openVehicleFormModal(vehicle);
    });
  }

  async removeVehicle(vehicleId) {
    this.vehiclesService.deleteVehicle(vehicleId).subscribe(async (response) => {
      if (response) {
        this.arrayList = this.arrayList.filter(item => item.id == vehicleId);  
      }
    });
  }

  async showDeleteAlert(vehicleId) {
    const alert = await this.alertController.create({
      header: 'Eliminar vehiculo',
      message: '¿Esta seguro de eliminar este vehiculo?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'OK', cssClass: 'danger', handler: () => { this.removeVehicle(vehicleId) }}
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  async openVehicleFormModal(vehicleData = null) {
    const modal = await this.modalController.create({
      component: VehicleComponent,
      componentProps: {
        vehicleData: vehicleData
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      if (data.action === 'new' && data.response) {
        this.createVehicle(data.response);
      }
    }
  }

  private async createVehicle(newVehicle) {
    this.vehiclesService.newVehicle(new NewVehicle(newVehicle)).subscribe(async (response) => {
      if (response) {
        this.addVehicle(response);
      }
    });
  }

  setVehicleArrayList(vehicles) {
    vehicles.forEach(vehicle => {
      if (!vehicle.deleted) {
        this.arrayList.push({ id: vehicle.id, primaryText: vehicle.vehicleBrand, secondaryText: vehicle.vehicleModel, tertiaryText: vehicle.patent });  
      }
    });
  }

  private async getVehicles() {
    this.vehiclesService.getVehicles().subscribe(async (vehicles) => {
      if (vehicles) {
        this.setVehicleArrayList(vehicles);
        this.loading = false;
      }
    });
  }

  // Agrego el vehicle al array para poder verlo sin necesidad de recargar toda la pagina
  addVehicle(newVehicle) {
    this.arrayList.push({ id: newVehicle.id, primaryText: newVehicle.vehicleBrand, secondaryText: newVehicle.vehicleModel, tertiaryText: newVehicle.patent });
  }
}




