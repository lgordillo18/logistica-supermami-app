import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit{
    @Input() primaryText: string;
    @Input() secondaryText: string;
    @Input() tertiaryText: string;

    constructor() {}

    ngOnInit() {}
}