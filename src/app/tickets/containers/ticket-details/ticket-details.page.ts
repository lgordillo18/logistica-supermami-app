import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";
import { ApprovalModalComponent } from "../../components/approval-modal/approval-modal.component";
import { CancelledModalComponent } from "../../components/cancelled-modal/cancelled-modal.component";
import { RejectedModalComponent } from "../../components/rejected-modal/rejected-modal.component";
import { ModifyTicket } from "../../models/modify-ticket.model";
import { TicketService } from "../../services/ticket.service";

@Component({
  selector: 'ticket-details-page',
  templateUrl: './ticket-details.page.html',
  styleUrls: ['./ticket-details.page.scss']
})
export class TicketDetailsPage implements OnInit {
  public ticketData: any;
  public selectedProducts = [];
  public totalProducts = 0;
  public totalWeight = 0;
  public currentEmployeeRol = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private ticketService: TicketService,
    private loadingHelper: LoadingHelper,
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController
  ) { 
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
  }

  ngOnInit() {
    this.loadingHelper.present();
    const params = this.activateRoute.snapshot.params;
    this.getTicketData(params.ticketId);
  }

  private getTicketData(ticketId) {
    this.ticketService.getOrderTicketData(ticketId).subscribe(async (response) => {
      if (response) {
        this.ticketData = response;
        this.setSelectedProducts(response.ticket_details);
        this.loadingHelper.dismiss();
      }
    });
  }

  setSelectedProducts(orderDetails) {
    orderDetails.forEach(orderDetail => {
      this.totalProducts = this.totalProducts + orderDetail.quantity;
      this.totalWeight = this.totalWeight + Number(orderDetail.product.weight);
      this.selectedProducts.push({ name: orderDetail.product.name, quantity: orderDetail.quantity });
    });
  }

  openModal(modalName = '') {
    switch (modalName) {
      case 'approval':
        this.openApprovalModal();
        break;
      
      case 'rejected':
        this.openRejectedModal();
        break;

      case 'cancel':
        this.openCancelledModal();
        break;
      
      case 'delayed':
        this.showDelayedMessageAlert();
        break;
    
      default:
        break;
    }
  }

  async showDelayedMessageAlert() {
    const alert = await this.alertController.create({
      header: 'Ticket de Pedido',
      message: '¿Esta seguro de marcar este ticket de pedido como entregado?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Confirmar', cssClass: 'primary', handler: () => { this.delayedAction() } }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  delayedAction() {
    const newOrderData = {
      ticket_status_id: 4
    };
    this.modifyOrderAction(newOrderData);
  }

  async openApprovalModal() {
    const modal = await this.modalController.create({
      component: ApprovalModalComponent,
      componentProps: {
      }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      if (data.action === 'approval') {
        const newOrderData = {
          assigned_employee_id: data.response,
          ticket_status_id: 2
        };
        this.modifyOrderAction(newOrderData);
      }
    }
  }

  async openRejectedModal() {
    const modal = await this.modalController.create({
      component: RejectedModalComponent,
      componentProps: {}
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      if (data.action === 'rejected') {
        const newOrderData = {
          ticket_status_id: 3,
          rejected_reason_id: data.response
        };

        this.modifyOrderAction(newOrderData);
      }
    }
  }

  async openCancelledModal() {
    const modal = await this.modalController.create({
      component: CancelledModalComponent,
      componentProps: {}
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      if (data.action === 'cancelled') {
        const newOrderData = {
          ticket_status_id: 5,
          cancelled_reason_id: data.response
        };

        this.modifyOrderAction(newOrderData);
      }
    }
  }

  async modifyOrderAction(data) {
    this.loadingHelper.present();
    this.ticketService.modifyOrder(this.ticketData.id, new ModifyTicket(data)).subscribe(async (response) => {
      if (response) {
        this.loadingHelper.dismiss();
        this.router.navigate(['/tabs/tickets', { message: 'edit-success' }]);
      }
    });
  }
}