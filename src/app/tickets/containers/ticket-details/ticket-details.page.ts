import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'ticket-details-page',
    templateUrl: './ticket-details.page.html',
    styleUrls: ['./ticket-details.page.scss']
})
export class TicketDetailsPage implements OnInit {
    public textConfig = {primaryText: 'hola', secondaryText: 'hola', tertiatyText: 'hola'};

    constructor() {}

    ngOnInit() {}


}