import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { OfficeService } from 'src/app/configurations/services/office.service';
import { LoadingHelper } from 'src/app/shared/helpers/loading.helper';
import { TicketService } from '../../services/ticket.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tickets-page',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss']
})
export class TicketsPage implements OnInit, AfterViewInit, OnDestroy {
  public pendingTickets: any[];
  public approvedTickets: any[];
  public rejectedTickets: any[];
  public deliveredTickets: any[];
  public cancelledTickets: any[];
  public allTickets: any[];
  public currentSegment: string = 'pending';
  public show: boolean = true;
  showMainContent: Boolean = true;
  private employeeId = null;
  public currentEmployeeRol = null;
  private currentOfficeId = null;
  public allOffices = [];
  public allTicketStatus = [];
  private ngUnsubscribe = new Subject();

  public textConfig = { primaryText: 'empleado', secondaryText: 'estado' };

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController,
    private ticketService: TicketService,
    private loadingHelper: LoadingHelper,
    private officeService: OfficeService
  ) { 
    this.employeeId = localStorage.getItem('current_employee_id');
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
    this.currentOfficeId = localStorage.getItem('current_office_id');
  }

  ngOnInit() {
    // this.loadingHelper.present();
    this.getOffices();
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
      this.getAllEmployeeTickets({});
    }

    if (this.currentEmployeeRol === 'encargado') {
      this.getAllManagerTickets({});
    }

    if (this.currentEmployeeRol === 'repartidor') {
      this.getAllDealerTickets({});
    }

    if (this.currentEmployeeRol === 'administrador') {
      this.getTicketStatus();
      this.getAllTickets({});
    }
  }

  async getOffices() {
    this.officeService.getOffices().subscribe(async (response) => {
      this.allOffices = response ? response : [];
    });
  }

  async getTicketStatus() {
    this.ticketService.getTicketStatus().subscribe(async (response) => {
      this.allTicketStatus = response ? response : [];
    });
  }

  ngAfterViewInit() {
    this.loadingHelper.dismiss();
  }

  private async getAllTickets(response = null) {
    this.ticketService.getAllTickets(response.ticket_status, response.date_from, response.date_to).pipe(takeUntil(this.ngUnsubscribe)).subscribe(async (response) => {
      if (response) {
        this.allTickets = response;
      }
      this.loadingHelper.dismiss();
    });
  }

  private async getAllEmployeeTickets(response = null) {
    this.ticketService.getAllEmployeeTickets(this.employeeId, response.office, response.date_from, response.date_to).pipe(takeUntil(this.ngUnsubscribe)).subscribe(async (response) => {
      if (response) {
        this.pendingTickets = response.pendingTickets ? response.pendingTickets.reverse() : [];
        this.approvedTickets = response.approvedTickets ? response.approvedTickets : [];
        this.rejectedTickets = response.rejectedTickets ? response.rejectedTickets : [];
      }
      this.loadingHelper.dismiss();
    });
  }

  private async getAllManagerTickets(response = null) {
    this.ticketService.getAllManagerTickets(this.currentOfficeId, response.office, response.date_from, response.date_to).pipe(takeUntil(this.ngUnsubscribe)).subscribe(async (response) => {
      if (response) {
        this.pendingTickets = response.pendingTickets ? response.pendingTickets : [];
        this.approvedTickets = response.approvedTickets ? response.approvedTickets : [];
        this.rejectedTickets = response.rejectedTickets ? response.rejectedTickets : [];
      }
      this.loadingHelper.dismiss();
    });
  }

  private async getAllDealerTickets(response = null) {
    this.ticketService.getAllDealerTickets(this.employeeId, response.office, response.date_from, response.date_to).pipe(takeUntil(this.ngUnsubscribe)).subscribe(async (response) => {
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

  filterEvent(response) {
    this.loadingHelper.present();
    if (this.currentEmployeeRol === 'empleado') {
      this.getAllEmployeeTickets(response);
    }

    if (this.currentEmployeeRol === 'encargado') {
      this.getAllManagerTickets(response);
    }

    if (this.currentEmployeeRol === 'repartidor') {
      this.getAllDealerTickets(response);
    }

    if (this.currentEmployeeRol === 'administrador') {
      this.getAllTickets(response);
    }
  }

  get totalFilters() {
    if (this.currentEmployeeRol === 'administrador') {
      return 4;
    } else {
      return 2;
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}