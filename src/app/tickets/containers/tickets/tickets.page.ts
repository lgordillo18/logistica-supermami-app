import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


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

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;

    if (params.message === 'success') {
      this.showSuccessToast();
    }

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

  private async showSuccessToast() {
    const message = "Ticket de pedido creado con exito!";
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      mode: 'ios',
      color: 'dark'
    });
    await toast.present(); 
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