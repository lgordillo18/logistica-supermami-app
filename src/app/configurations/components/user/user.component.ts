import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.interface';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class CreateUserComponent implements OnInit {
  
  @Input() arrayList: any[];
  @Input() arrayList1: any[];
  @Input() arrayList2: any[];
  @Input() arrayList3: any[];
  @Output() newUser = new EventEmitter<User>();
  public createUserForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    office: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    vehicle: new FormControl('', Validators.required)

  });


  
  constructor() { }

  ngOnInit() {}

  createUser() {
    const values = this.createUserForm.value;
    this.newUser.emit(values);
  }
}


