import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'configurations',
  templateUrl: './configurations.page.html'
})
export class ConfigurationsPage implements OnInit {
  public currentEmployeeRol = null;

  constructor(
    private router: Router
  ) {
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
  }

  ngOnInit() {
  }

  logoutAction() {
    localStorage.removeItem('current_employee_id');
    localStorage.removeItem('current_employee_rol');
    localStorage.removeItem('current_office_id');
    this.router.navigate(['/logout']);
  }
}
