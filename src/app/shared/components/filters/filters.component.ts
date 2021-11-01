import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  @Input() placeHolder1: string;
  @Input() placeHolder2: string;
  @Input() placeHolder3: string;
  @Input() placeHolder4: string;


  constructor() { }

  ngOnInit() { }

}
