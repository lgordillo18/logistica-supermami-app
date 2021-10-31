import { Component, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'products-modal-component',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss']
})
export class ProductsModalComponent {
  @ViewChild('productComponent') productComponent: IonicSelectableComponent;
  @Input() allProducts = [];
  @Input() selectedProducts = [];
  
  constructor(
    private modalController: ModalController
  ) { }

  openSearchProducts() {
    this.productComponent.open();
  }

  productChange(event) {
    const values = event.value;
    values.forEach(value => {
      value.quantity = 1;
      this.selectedProducts.push(value)
    });
    this.productComponent.clear();
  }

  removeProduct(productId) {
    this.selectedProducts.forEach((value,index) => {
      if(value.id == productId) this.selectedProducts.splice(index, 1);
    });
  }

  changeQuantity(data) {
    this.selectedProducts.forEach(product => {
      if (product.id == data.id) {
        product.quantity = Number(data.quantity);
      }
    });
  }

  confirmProducts() {
    this.dismiss(this.selectedProducts);
  }

  cancel() {
    this.dismiss();
  }

  dismiss(response = null) {
    this.modalController.dismiss(response);
  }
}