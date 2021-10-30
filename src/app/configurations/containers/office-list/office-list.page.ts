import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController, ModalController } from "@ionic/angular";
import { NewOffice } from "src/app/models/office";
import { OfficeComponent } from "../../components/office/office.component";
import { ListArray } from "../../models/list-array.interface";
import { OfficeService } from "../../services/office.service";

@Component({
    selector: 'office-list-page',
    templateUrl: './office-list.page.html',
    styleUrls: ['./office-list.page.scss']
})
export class OfficeListPage implements OnInit {
    public arrayList: ListArray[] = [];
    public loading: boolean;


    constructor(
        private officesService: OfficeService,
        private modalController: ModalController,
        private loadingController: LoadingController,
        private alertController: AlertController
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getOffices();
    }

    editOffice(officeId) {
        this.officesService.getOffice(officeId).subscribe(async (office) => {
          this.openOfficeFormModal(office);
        });
      }
    
      async removeOffice(officeId) {
        this.officesService.deleteOffice(officeId).subscribe(async (response) => {
          if (response) {
            this.arrayList = this.arrayList.filter(item => item.id == officeId);  
          }
        });
      }
    
      async showDeleteAlert(officeId) {
        const alert = await this.alertController.create({
          header: 'Eliminar sucursal',
          message: '¿Esta seguro de eliminar esta sucursal?',
          buttons: [
            { text: 'Cancelar', role: 'cancel' },
            { text: 'OK', cssClass: 'danger', handler: () => { this.removeOffice(officeId) }}
          ],
          backdropDismiss: false
        });
        await alert.present();
      }
    
      async openOfficeFormModal(officeData = null) {
        const modal = await this.modalController.create({
          component: OfficeComponent,
          componentProps: {
            officeData: officeData
          }
        });
    
        await modal.present();
    
        const { data } = await modal.onWillDismiss();
    
        if (data) {
          if (data.action === 'new' && data.response) {
            this.createOffice(data.response);
          }
        }
      }
    
      private async createOffice(newOffice) {
        this.officesService.newOffice(new NewOffice(newOffice)).subscribe(async (response) => {
          if (response) {
            this.addOffice(response);
          }
        });
      }
    
      setOfficeArrayList(offices) {
        offices.forEach(office => {
          if (!office.deleted) {
            this.arrayList.push({ id: office.id, primaryText: office.name, secondaryText: null, tertiaryText: null });  
          }
        });
      }
    
      private async getOffices() {
        this.officesService.getOffices().subscribe(async (offices) => {
          if (offices) {
            this.setOfficeArrayList(offices);
            this.loading = false;
          }
        });
      }
    
      // Agrego el vehicle al array para poder verlo sin necesidad de recargar toda la pagina
      addOffice(newOffice) {
        this.arrayList.push({ id: newOffice.id, primaryText: newOffice.name, secondaryText: null, tertiaryText: null });
      }

}