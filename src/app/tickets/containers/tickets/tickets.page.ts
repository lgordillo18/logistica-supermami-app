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

  public textConfig = { primaryText: 'empleado', secondaryText: 'estado' };

  constructor() { }

  ngOnInit() {

    this.pendingTickets = [
      {
        id: 17,
        sucursal: "San Vicente",
        fecha: '28-10-2021'
      },
      {
        id: 18,
        sucursal: "General Paz",
        fecha: '28-10-2021'
      }
    ];
    this.approvedTickets = [
      {
        id: 109,
        sucursal: "Rodriguez del Busto",
        fecha: '29-10-2021'
      }
    ];
    this.rejectedTickets = [
      {
        id: 47,
        sucursal: "Salsipuedes",
        fecha: '30-10-2021'
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