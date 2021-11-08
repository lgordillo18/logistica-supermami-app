import { Component, EventEmitter,OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { TicketService } from "../../services/ticket.service";

@Component({
  selector: 'rejected-modal',
  templateUrl: './rejected-modal.component.html',
  styleUrls: ['./rejected-modal.component.scss']
})

export class RejectedModalComponent implements OnInit {
  public enableButton: boolean = false;
  public rejectedReasonForm: FormGroup = new FormGroup({
    reason: new FormControl('', Validators.required)
  });
  public allReasons: any[];
  public loading: boolean;

  constructor(
    private modalController: ModalController,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getAllReasons();
  }

  confirmButton() {
    this.dismiss('rejected', this.rejectedReasonForm.value.reason);
  }

  cancel() {
    this.dismiss('');
  }

  private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
  }

  private async getAllReasons() {
    this.ticketService.getRejectedReasons().subscribe(async (reasons) => {
      if (reasons) {
        this.allReasons = reasons;
        this.loading = false;
      }
    });
  }

  onChangeEvent(event) {
    this.enableButton = true;
  }
}