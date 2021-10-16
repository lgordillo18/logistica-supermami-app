import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  public userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    cellphone: new FormControl(''),
    email: new FormControl('')
  });


  constructor() { }

  ngOnInit() {}

  get firstName() {
    return this.userForm.get('firstName') as FormControl;
  }
}
