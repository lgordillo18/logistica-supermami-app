import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";
import { ApprovalModalComponent } from "../../components/approval-modal/approval-modal.component";
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
    private router: Router
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
    
      default:
        break;
    }
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
        this.approvalAction(newOrderData);
      }
    }
  }

  async approvalAction(data) {
    this.loadingHelper.present();
    this.ticketService.modifyOrder(this.ticketData.id, new ModifyTicket(data)).subscribe(async (response) => {
      if (response) {
        this.loadingHelper.dismiss();
        this.router.navigate(['/tabs/tickets', { message: 'edit-success' }]);
      }
    });
  }
}