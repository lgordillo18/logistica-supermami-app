export class ModifyTicket {
  assigned_employee: {};
  ticket_status: {};
  rejected_reason: {};
  cancelled_reason: {};
  finish_date: any;

  constructor(order_ticket) {
    this.assigned_employee = order_ticket.assigned_employee_id ? { id: Number(order_ticket.assigned_employee_id)} : null;
    this.ticket_status = { id: order_ticket.ticket_status_id };
    this.rejected_reason = order_ticket.rejected_reason_id ? { id: Number(order_ticket.rejected_reason_id) } : null;
    this.cancelled_reason = order_ticket.cancelled_reason_id ? { id: Number(order_ticket.cancelled_reason_id) } : null;
    this.finish_date = this.finish_date ? this.finish_date : null;
  }
}