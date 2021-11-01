import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoadingController, ModalController } from "@ionic/angular";
import { AuthModule } from "src/app/auth/auth.module";
import { ListArray } from "src/app/configurations/models/list-array.interface";
import { VehicleService } from "src/app/configurations/services/vehicle.service";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";
//import { OfficeService } from "../../services/office.service";

@Component({
    selector: 'ticket-asig',
    templateUrl: './ticket-asig.component.html',
    styleUrls: ['/ticket-asig.component.scss'],
})

export class TicketAsigComponent implements OnInit, AfterViewInit {
    @Input() ticketAsigData: any;

    public ticketAsigForm: FormGroup = new FormGroup({
        id: new FormControl(''),
        dealer: new FormControl('', Validators.required)
    });

    //public allDealers: any[];
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
        this.getVehicles();
     }

    ngAfterViewInit() {
        if (this.ticketAsigData) {
            if (this.ticketAsigData.id) {
              this.ticketAsigForm.get('id').setValue(this.ticketAsigData.id);
            }
        }
    }

    asigTicket(){
        //endpoit update status ticket y relacione con dealer
    }
    
    cancel() {
    this.dismiss('');
    }

    private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
    }

    setVehicleArrayList(vehicles) {
        vehicles.forEach(vehicle => {
          if (!vehicle.deleted) {
            this.arrayList.push({ id: vehicle.id, primaryText: vehicle.vehicleBrand, secondaryText: vehicle.vehicleModel, tertiaryText: vehicle.employeeFullName });  
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

}
