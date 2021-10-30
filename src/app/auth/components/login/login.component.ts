import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  @Input() userStromg: string;
  @Input() passwordStromg: string;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log("HOLA");


    this.loginForm = this.formBuilder.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onCheckInputValidation(event) {
    const numberPattern = new RegExp('^[0-9\~]*$');
    const input = String.fromCharCode(event.charCode);
    if (!numberPattern.test(input)) {
      event.preventDefault();
    }
  }

  login() {
    // const values = this.loginForm.value;
    // return this.loginValueEvent.emit({ dni: values.dni });
  }

  get user() { return this.loginForm.get('user'); }

  get password() { return this.loginForm.get('password'); }
}

// export class SearchComponent implements OnInit {
//   searchForm: FormGroup;
//   deliveriesList:any = [];
//   showList: boolean;
//   @Input() dniStromg: string;
//   @Output() searchValueEvent = new EventEmitter();




