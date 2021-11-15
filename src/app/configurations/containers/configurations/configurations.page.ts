import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'configurations',
  templateUrl: './configurations.page.html'
})
export class ConfigurationsPage implements OnInit {
  public currentEmployeeRol = null;

  constructor() {
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
  }

  ngOnInit() {
  }
}
