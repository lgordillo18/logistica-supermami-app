import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'select-offices-component',
  templateUrl: './select-offices.component.html',
  styleUrls: ['./select-offices.component.scss'],
})
export class SelectOfficesComponent {
  @Input() allOffices = [];
  @Output() selectEvent = new EventEmitter<any>();

  public officeForm: FormGroup = new FormGroup({
    office: new FormControl('', Validators.required)
  });
  
  constructor() { }

  onSelectEvent(event) {
    this.selectEvent.emit(event.detail.value);
  }
}
