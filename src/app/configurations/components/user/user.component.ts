import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { combineLatest } from 'rxjs';
import { OfficeService } from '../../services/office.service';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { LoadingHelper } from 'src/app/shared/helpers/loading.helper';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, AfterViewInit {
  @Input() userData: any;

  public userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    cellphone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    offices: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
    areas: new FormControl('')
  });

  public allRoles = [];
  public allAreas = [];
  public allOffices = [];
  public allVehicles = [];
  public employeeRol;
  public dealerRol;
  public displayAreas: boolean = false;
  
  constructor(
    private usersService: UserService,
    private officeService: OfficeService,
    private loadingHelper: LoadingHelper,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadingHelper.present();
    this.getAllComboboxData();
  }

  ngAfterViewInit() {
    if (this.userData) {
      if (this.userData.id) {
        this.userForm.get('id').setValue(this.userData.id);
      }
      if (this.userData.first_name) {
        this.userForm.get('firstName').setValue(this.userData.first_name);
      }
      if (this.userData.last_name) {
        this.userForm.get('lastName').setValue(this.userData.last_name);
      }
      if (this.userData.username) {
        this.userForm.get('userName').setValue(this.userData.username);
      }
      if (this.userData.dni) {
        this.userForm.get('dni').setValue(this.userData.dni);
      }
      if (this.userData.phone_number) {
        this.userForm.get('cellphone').setValue(this.userData.phone_number);
      }
      if (this.userData.email) {
        this.userForm.get('email').setValue(this.userData.email);
      }
      if (this.userData.address) {
        this.userForm.get('address').setValue(this.userData.address);
      }
    }
  }

  private async getAllComboboxData() {
    combineLatest(this.usersService.getRoles(), this.usersService.getAreas(), this.officeService.getOffices()).pipe(take(1)).subscribe(async ([roles, areas, offices]) => {
      if (roles) { this.setRoles(roles); }
      this.allRoles = roles ? roles : [];
      this.allAreas = areas ? areas : [];
      this.allOffices = offices ? offices : [];
      this.loadingHelper.dismiss();
    });
  }

  setRoles(roles = []) {
    if (roles) {
      this.employeeRol = roles.filter( rol => { return rol.name.toLowerCase() === 'empleado' });
    }
  }

  createUser() {
    this.dismiss('new', this.userForm.value);
  }

  editUser() {
    this.dismiss('edit', this.userForm.value);
  }

  onRolChangeEvent(event) {
    const value = event.detail.value;

    if (this.employeeRol[0].id == value.split('-')[0]) {
      this.displayAreas = true;
    } else {
      this.displayAreas = false;
    }
  }

  cancel() {
    this.dismiss('');
  }

  private dismiss(action, response = null) {
    this.modalController.dismiss({ action: action, response });
  }
}


