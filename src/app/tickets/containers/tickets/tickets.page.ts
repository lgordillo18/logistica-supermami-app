import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tickets-page',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss']
})
export class TicketsPage implements OnInit {
  public pendingTickets: any[];
  public approvedTickets: any[];
  public rejectedTickets: any[];
  public currentSegment: string = 'pending';
  public show: boolean = true;
  showMainContent: Boolean = true;

  public textConfig = { primaryText: 'empleado', secondaryText: 'estado' };

  constructor() { }

  ngOnInit() {

    this.pendingTickets = [
      {
        id: 1,
        empleado: "Gonzalo",
        estado: 'pendiente'
      }
    ];
    this.approvedTickets = [
      {
        id: 1,
        empleado: "Lucas",
        estado: 'aprobado'
      }
    ];
    this.rejectedTickets = [
      {
        id: 1,
        empleado: "David",
        estado: 'rechazado'
      }
    ];
  }

  getTicketsPendientes() {
    //endpoint
  }

  getApprovedTickets() {
    //endpoint
  }

  getTicketsRejected() {
    //endpoint
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value;
  }
}