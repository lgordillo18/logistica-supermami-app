import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'configurations',
  templateUrl: './configurations.page.html'
})
export class ConfigurationsPage implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
