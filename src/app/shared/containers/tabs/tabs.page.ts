import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public currentEmployeeRol = null;

  constructor() {
    this.currentEmployeeRol = localStorage.getItem('current_employee_rol');
  }

  ngOnInit() { }
}
