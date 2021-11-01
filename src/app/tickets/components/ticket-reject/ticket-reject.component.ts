import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";
//import { OfficeService } from "../../services/office.service";

@Component({
    selector: 'ticket-reject',
    templateUrl: './ticket-reject.component.html',
    styleUrls: ['/ticket-reject.component.scss'],
})

export class TicketRejectComponent implements OnInit, AfterViewInit {
    @Input() ticketRejectData: any;

    public ticketRejectForm: FormGroup = new FormGroup({
        id: new FormControl(''),
        status: new FormControl('', Validators.required),
        details: new FormControl('')
    });

    public allStatus: any[];


    constructor(
        private loadingHelper: LoadingHelper,
        private modalController: ModalController
    ) { }

    ngOnInit() { 
        this.allStatus = [
            {
                id: 1,
                name: "Información errónea"
            },
            {
                id: 2,
                name: "Stock insuficiente"
            },
            {
                id: 3,
                name: "Personal insuficiente"
            },
            {
                id: 4,
                name: "Otro"
            }
        ]
     }

    ngAfterViewInit() {
        if (this.ticketRejectData) {
            if (this.ticketRejectData.id) {
              this.ticketRejectForm.get('id').setValue(this.ticketRejectData.id);
            }
            if (this.ticketRejectData.details) {
              this.ticketRejectForm.get('details').setValue(this.ticketRejectData.name);
            }
        }
    }

    rejectTicket(){
        //endpoit update status ticket
    }
    
    cancel() {
    this.dismiss('');
    }

    private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
    }


}