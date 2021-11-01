import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingHelper } from 'src/app/shared/helpers/loading.helper';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'tickets-page',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss']
})
export class TicketsPage implements OnInit {
  public pendingTickets: any[];
  public approvedTickets: any[];
  public rejectedTickets: any[];
  public deliveredTickets: any[];
  public cancelledTickets: any[];
  public currentSegment: string = 'pending';
  public show: boolean = true;
  showMainContent: Boolean = true;
  private employeeId = null;

  public textConfig = { primaryText: 'empleado', secondaryText: 'estado' };

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController,
    private ticketService: TicketService,
    private loadingHelper: LoadingHelper
  ) { }

  ngOnInit() {
    this.loadingHelper.present();
    this.employeeId = localStorage.getItem('current_employee_id');
    const params = this.route.snapshot.params;
    if (params.message === 'success') { this.showSuccessToast(); }
    this.getAllTickets();
  }

  private async getAllTickets() {
    this.ticketService.getAllEmployeeTickets(this.employeeId).subscribe(async (response) => {
      if (response) {
        this.pendingTickets = response.pendingTickets ? response.pendingTickets : [];
        this.approvedTickets = response.approvedTickets ? response.approvedTickets : [];
        this.rejectedTickets = response.rejectedTickets ? response.rejectedTickets : [];
        this.deliveredTickets = response.deliveredTickets ? response.deliveredTickets : [];
        this.cancelledTickets = response.cancelledTickets ? response.cancelledTickets : [];
      }
      this.loadingHelper.dismiss();
    });
  }

  private async showSuccessToast() {
    const message = "Ticket de pedido creado con exito!";
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      mode: 'ios',
      color: 'dark'
    });
    await toast.present(); 
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value;
  }
}