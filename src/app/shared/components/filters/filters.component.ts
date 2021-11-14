import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CalendarModalOptions, CalendarModal } from 'ion2-calendar';
import * as moment from 'moment';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() totalFilters: number = 1;
  @Input() offices: any[];
  @Input() enableDateFilter: boolean = false;
  @Output() filterEvent = new EventEmitter<any>(); 
  
  filterForm: FormGroup;
  showFilters: boolean = false;
  showOfficeFilter: boolean = false;
  totalRows = 1;
  dateTo = '';
  dateFrom = '';
  date = '';

  filtersConfig = {};

  constructor(
    public formBuilder: FormBuilder,
    private modalController: ModalController
  ) { 
  }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({});
    if (this.offices) {
      this.showOfficeFilter = true;
      this.filterForm.addControl('office',this.formBuilder.control(''));
    }
    if (this.enableDateFilter) {
      this.filterForm.addControl('date',this.formBuilder.control(''));
    }
  }

  showFiltersEvent() {
    this.showFilters = !this.showFilters;
  }

  onFilterEvent() {
    const response:any = {};

    if (this.filterForm.get('office').value) {
      response.office = this.filterForm.get('office').value;
    }

    if (this.dateTo && this.dateFrom) {
      response.date_to = this.dateTo;
      response.date_from = this.dateFrom;
    }

    this.filterEvent.emit(response);
  }

  onFilterClearEvent() {
    this.filterForm.reset();
    this.date = '';
  }

  public async onDateFilterFocus() {
    const options: CalendarModalOptions = {
      defaultDate: new Date(2021, 1, 1),
      pickMode: 'range',
      title: 'Fechas',
      closeLabel: 'Cerrar',
      doneLabel: 'Aceptar',
      canBackwardsSelected: true
    };

    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const { data } = await myCalendar.onDidDismiss();

    if (data) {
      const { from, to } = data;

      if (from && to) {
        this.dateFrom = from.string;
        this.dateTo = to.string;
        this.date = `${from.string}/${to.string}`;
      }
    }
  }

  get columnSize() {
    if (this.totalFilters == 1) {
      return '12';
    } else {
      return '6';
    }
  }
}
