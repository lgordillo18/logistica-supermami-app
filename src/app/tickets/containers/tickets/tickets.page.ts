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
  public currentEmployeeRol = null;
  private currentOfficeId = null;

  public textConfig = { primaryText: 'empleado', secondaryText: 'estado' };

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController,
    private ticketService: TicketService,
    private loadingHelper: LoadingHelper
  ) { 
    this.employeeId = localStorage.getItem('current_employee_id');
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
    this.currentOfficeId = localStorage.getItem('current_office_id');
  }

  ngOnInit() {
    // this.loadingHelper.present();
    const params = this.route.snapshot.params;
    if (params.message) {
      if (params.message === 'success') {
        this.showSuccessToast('Pedido creado con éxito!');
      }
      if (params.message === 'edit-success') {
        this.showSuccessToast('Pedido actualizado con éxito!');
      }
    }
    
    if (this.currentEmployeeRol === 'empleado') {
      this.getAllEmployeeTickets();
    }

    if (this.currentEmployeeRol === 'encargado') {
      this.getAllManagerTickets();
    }

    if (this.currentEmployeeRol === 'repartidor') {
      this.getAllDealerTickets();
    }
  }

  private async getAllEmployeeTickets() {
    this.ticketService.getAllEmployeeTickets(this.employeeId).subscribe(async (response) => {
      if (response) {
        this.pendingTickets = response.pendingTickets ? response.pendingTickets.reverse() : [];
        this.approvedTickets = response.approvedTickets ? response.approvedTickets : [];
        this.rejectedTickets = response.rejectedTickets ? response.rejectedTickets : [];
      }
      this.loadingHelper.dismiss();
    });
  }

  private async getAllManagerTickets() {
    this.ticketService.getAllManagerTickets(this.currentOfficeId).subscribe(async (response) => {
      if (response) {
        this.pendingTickets = response.pendingTickets ? response.pendingTickets : [];
        this.approvedTickets = response.approvedTickets ? response.approvedTickets : [];
        this.rejectedTickets = response.rejectedTickets ? response.rejectedTickets : [];
      }
      this.loadingHelper.dismiss();
    });
  }

  private async getAllDealerTickets() {
    this.ticketService.getAllEmployeeTickets(this.employeeId).subscribe(async (response) => {
      if (response) {
        this.approvedTickets = response.approvedTickets ? response.approvedTickets : [];
        this.deliveredTickets = response.deliveredTickets ? response.deliveredTickets : [];
        this.cancelledTickets = response.cancelledTickets ? response.cancelledTickets : [];
      }
      this.loadingHelper.dismiss();
    });
  }

  private async showSuccessToast(message = '') {
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