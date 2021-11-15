import { Component, EventEmitter,OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { ListArray } from "src/app/configurations/models/list-array.interface";
import { TicketService } from "../../services/ticket.service";

@Component({
  selector: 'reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.scss']
})

export class RejectModalComponent implements OnInit {
  @Output() selectReasonEvent = new EventEmitter<any>();
  public enableButton: boolean = false;
  public reasons = [];
  public reasonForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    reason: new FormControl('', Validators.required)
  });
  public allReasons: any[];
  public loading: boolean;

  constructor(
    private ticketService: TicketService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getReasons();
  }

  onConfirmEvent() {
    this.dismiss('reject', this.reasonForm.value.reason);
  }

  cancel() {
    this.dismiss('');
  }

  private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
  }

  private async getReasons() {
    this.ticketService.getRejectedReasons().subscribe(async (reasons) => {
      if (reasons) {
        this.reasons = reasons ? reasons : []; 
        this.loading = false;
      }
    });
  }

  onSelectChangeEvent(event) {
    this.enableButton = true;
  }
}
