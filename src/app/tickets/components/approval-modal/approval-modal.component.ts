import { Component, EventEmitter,OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoadingController, ModalController } from "@ionic/angular";
import { ListArray } from "src/app/configurations/models/list-array.interface";
import { VehicleService } from "src/app/configurations/services/vehicle.service";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";

@Component({
  selector: 'approval-modal',
  templateUrl: './approval-modal.component.html',
  styleUrls: ['./approval-modal.component.scss']
})

export class ApprovalModalComponent implements OnInit {
  @Output() selectDealerEvent = new EventEmitter<any>();
  public enableButton: boolean = false;
  public vehicles = [];
  private currentOfficeId = null;

  public ticketAsigForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    dealer: new FormControl('', Validators.required)
  });

  public allDealers: any[];
  public arrayList: ListArray[] = [];
  public loading: boolean;

  constructor(
    private vehiclesService: VehicleService,
    private loadingHelper: LoadingHelper,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loading = true;
    this.currentOfficeId = localStorage.getItem('current_office_id');
    this.getVehicles();
  }

  asigTicket() {
    this.dismiss('approval', this.ticketAsigForm.value.dealer);
  }

  cancel() {
    this.dismiss('');
  }

  private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
  }

  private async getVehicles() {
    this.vehiclesService.getVehicles().subscribe(async (vehicles) => {
      if (vehicles) {
        vehicles.forEach(vehicle => {
          if (vehicle.vehicleStatus === 'activo' && vehicle.vehicle_office_id == this.currentOfficeId) {
            this.vehicles.push({ id: vehicle.id, name: `${vehicle.vehicleBrand} ${vehicle.vehicleModel} (${vehicle.employeeFullName})`});
          }
        });
        this.loading = false;
      }
    });
  }

  onDealerChangeEvent(event) {
    this.enableButton = true;
  }
}
