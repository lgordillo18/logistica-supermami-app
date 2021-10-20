import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-list-component',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() primaryText: string;
  @Input() secondaryText: string;
  @Input() tertiaryText: string;

  constructor() { }

  ngOnInit() {
  }
}