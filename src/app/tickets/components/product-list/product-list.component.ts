import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() selectedProducts = [];
  @Input() withRemoveButton: boolean = true;
  @Input() totalProducts: number = 0;
  @Output() removeProductEvent = new EventEmitter<any>();
  @Output() changeQuantityEvent = new EventEmitter<any>();

  constructor() { }

  deleteProduct(productId){
    this.removeProductEvent.emit(productId);
  }

  changeQuantity(productId, event){
    this.changeQuantityEvent.emit({ id: productId,  quantity: event.detail.value });
  }
}
