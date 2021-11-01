import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";
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

  constructor(
    private activateRoute: ActivatedRoute,
    private ticketService: TicketService,
    private loadingHelper: LoadingHelper
  ) { }

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
}