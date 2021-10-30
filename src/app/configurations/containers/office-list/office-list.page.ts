import { Component, OnInit } from "@angular/core";
import { OfficeService } from "../../services/office.service";

@Component({
    selector: 'office-list-page',
    templateUrl: './office-list.page.html',
    styleUrls: ['./office-list.page.scss']
})
export class OfficeListPage implements OnInit {
    public officeList: any[];
    public textConfig = { primaryText: 'office_name' };

    constructor(private officeService: OfficeService) { }

    ngOnInit() {
        this.officeList = [
            {
                office_name: 'Sucursal 1'
            },
            {
                office_name: 'Sucursal 2'
            }
        ];
    }

    editOffice(officeId) {

    }
    removeOffice(officeId) {

    }
}