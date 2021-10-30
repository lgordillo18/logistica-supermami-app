import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NewUser } from 'src/app/models/user';
import { UserComponent } from '../../components/user/user.component';
import { ListArray } from '../../models/list-array.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-list-page',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss']
})
export class UsersListPage implements OnInit {
  public arrayList: ListArray[] = [];
  public loading: boolean;

  constructor(
    private usersService: UserService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getUsers();
  }

  editUser(userId) {
    this.usersService.getUser(userId).subscribe(async (user) => {
      this.openUserFormModal(user);
    });
  }

  async removeUser(userId) {
    this.usersService.deleteUser(userId).subscribe(async (response) => {
      if (response) {
        this.arrayList = this.arrayList.filter(item => item.id == userId);  
      }
    });
  }

  async showDeleteAlert(userId) {
    const alert = await this.alertController.create({
      header: 'Eliminar usuario',
      message: '¿Esta seguro de eliminar este usuario?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'OK', cssClass: 'danger', handler: () => { this.removeUser(userId) }}
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  async openUserFormModal(userData = null) {
    const modal = await this.modalController.create({
      component: UserComponent,
      componentProps: {
        userData: userData
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      if (data.action === 'new' && data.response) {
        this.createUser(data.response);
      }
    }
  }

  private async createUser(newUser) {
    this.usersService.newUser(new NewUser(newUser)).subscribe(async (response) => {
      if (response) {
        this.addUser(response);
      }
    });
  }

  setUserArrayList(users) {
    users.forEach(user => {
      if (!user.deleted) {
        this.arrayList.push({ id: user.id, primaryText: user.full_name, secondaryText: user.username, tertiaryText: user.rol });  
      }
    });
  }

  private async getUsers() {
    this.usersService.getUsers().subscribe(async (users) => {
      if (users) {
        this.setUserArrayList(users);
        this.loading = false;
      }
    });
  }

  // Agrego el user al array para poder verlo sin necesidad de recargar toda la pagina
  addUser(newUser) {
    this.arrayList.push({ id: newUser.id, primaryText: `${newUser.first_name} ${newUser.last_name}`, secondaryText: newUser.username, tertiaryText: newUser.rol.name });
  }
}