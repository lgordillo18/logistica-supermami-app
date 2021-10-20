import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() arrayList: any[];
  @Input() textConfig: any;
  @Output() editEvent = new EventEmitter<any>();
  @Output() removeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    // this.textConfig = {}
  }

  editAction(itemId) {
    this.editEvent.emit(itemId);
  }

  removeAction(itemId) {
    this.removeEvent.emit(itemId);
  }

  get primaryText() {
    return `item.${this.textConfig.primaryText}`;
  }
}