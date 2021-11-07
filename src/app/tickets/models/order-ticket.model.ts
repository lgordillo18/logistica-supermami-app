import { OrderTicketDetails } from "./order-ticket-details.model";

export class OrderTicket {
  office: {};
  employee: {};
  ticket_status: {};
  order_ticket_details: OrderTicketDetails[];
  origin_office: {};

  constructor(order_ticket) {
    this.office = { id: order_ticket.office_id };
    this.employee = { id: order_ticket.employee_id };
    this.ticket_status = { id: order_ticket.ticket_status_id };
    this.order_ticket_details = order_ticket.products;
    this.origin_office = { id: order_ticket.origin_office_id };
  }
}
