import { Component } from "@angular/core";


@Component({
    selector: 'office-component',
    templateUrl: './office.component.html',
    styleUrls: ['/office.component.scss'],

})

export class officeComponent implements OnInit, AfterViewInit {
    @Imput() officeData: any;


    public officeForm: FormGroup = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', Validators.required)
    });

    constructor(
        private officeService: OfficeService,
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

    createOffice(){
        this.dismiss('new', this.officeForm.value);
    }

    private dismiss(action, response = null){
        this.modalController.dismiss({ action = action, response})
    }

}