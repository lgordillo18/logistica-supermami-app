import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { LoadingHelper } from "src/app/shared/helpers/loading.helper";
import { OfficeService } from "../../services/office.service";

@Component({
    selector: 'office-component',
    templateUrl: './office.component.html'
})

export class OfficeComponent implements OnInit, AfterViewInit {
    @Input() officeData: any;

    public officeForm: FormGroup = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', Validators.required)
    });

    constructor(
        private loadingHelper: LoadingHelper,
        private modalController: ModalController
    ) { }

    ngOnInit() { }

    ngAfterViewInit() {
        if (this.officeData) {
            if (this.officeData.id) {
                this.officeForm.get('id').setValue(this.officeData.id);
            }
            if (this.officeData.name) {
                this.officeForm.get('name').setValue(this.officeData.name);
            }
        }
    }

    createOffice() {
        this.dismiss('new', this.officeForm.value);
    }

    editOffice() {
        this.dismiss('edit', this.officeForm.value);
    }

    cancel() {
        this.dismiss('');
    }

    private dismiss(action, response = null) {
        this.modalController.dismiss({ action: action, response });
    }


}