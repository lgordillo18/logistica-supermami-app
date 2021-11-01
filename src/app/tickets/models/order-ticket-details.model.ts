export class OrderTicketDetails {
  product: {};
  quantity: number;

  constructor(order_ticket_detail) {
    this.product = { id: order_ticket_detail.product_id };
    this.quantity = order_ticket_detail.quantity;
  }
}