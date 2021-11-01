import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/configurations/services/office.service';
import { LoadingHelper } from 'src/app/shared/helpers/loading.helper';
import { TicketService } from '../../services/ticket.service';
import { take } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductsModalComponent } from '../../components/products-modal/products-modal.component';
import { OrderTicketDetails } from '../../models/order-ticket-details.model';
import { OrderTicket } from '../../models/order-ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'new-ticket-page',
  templateUrl: './new-ticket.page.html',
  styleUrls: ['./new-ticket.page.scss']
})
export class NewTicketPage implements OnInit {
  public offices = [];
  public products = [];
  public officeIdSelected = null;
  public selectedProducts = [];
  public isSubmitted: boolean = false;

  constructor(
    private officeService: OfficeService,
    private ticketService: TicketService,
    private loadingHelper: LoadingHelper,
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadingHelper.present();
    combineLatest(this.officeService.getOffices(), this.ticketService.getProducts()).pipe(take(1)).subscribe(async ([offices, products]) => {
      this.offices = offices ? offices : [];
      this.products = products ? products : [];
      this.loadingHelper.dismiss();
    });
  }

  async openProductsModal() {
    const modal = await this.modalController.create({
      component: ProductsModalComponent,
      componentProps: {
        allProducts: this.products,
        selectedProducts: this.selectedProducts
      }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.selectedProducts = data;
    }
  }

  officeSelectEvent(office_id) {
    this.officeIdSelected = office_id;
  }

  async prepareOrder() {
    this.isSubmitted = true;
    if (this.officeIdSelected && this.selectedProducts.length > 0) {
      let products: OrderTicketDetails[] = [];
      this.selectedProducts.forEach(productSelected => {
        const product: OrderTicketDetails = { product: { id: productSelected.id }, quantity: productSelected.quantity };
        products.push(product);
      });

      const newOrder = {
        office_id: this.officeIdSelected,
        employee_id: 3,
        ticket_status_id: 1,
        products: products
      };

      const alert = await this.alertController.create({
        header: 'Crear Ticket de Pedido',
        message: '¿Esta seguro de crear este ticket de pedido?',
        buttons: [
          { text: 'Cancelar', role: 'cancel' },
          { text: 'Confirmar', cssClass: 'primary', handler: () => { this.createOrder(newOrder) } }
        ],
        backdropDismiss: false
      });
      await alert.present();
    }
  }

  async createOrder(newOrder) {
    this.loadingHelper.present();
    this.ticketService.createNewOrder(new OrderTicket(newOrder)).subscribe(async (response) => {
      if (response) {
        this.loadingHelper.dismiss();
        this.router.navigate(['/tabs/tickets', { message: 'success' }]);
      }
    });
  }

  get total() {
    let total = 0;
    this.selectedProducts.forEach(product => {
      total = total + product.quantity;
    });

    return Number(total);
  }
}