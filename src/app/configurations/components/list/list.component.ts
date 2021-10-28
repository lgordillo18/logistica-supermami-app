import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListArray } from '../../models/list-array.interface';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() loading: boolean = true;
  @Input() arrayList: ListArray[] = [];
  @Output() editEvent = new EventEmitter<any>();
  @Output() removeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  editAction(itemId) {
    this.editEvent.emit(itemId);
  }

  removeAction(itemId) {
    this.removeEvent.emit(itemId);
  }
}