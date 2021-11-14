import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { OfficeService } from 'src/app/configurations/services/office.service';
import { LoadingHelper } from 'src/app/shared/helpers/loading.helper';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss']
})
export class ReportsPage implements OnInit, AfterViewInit {
  public currentSegment: string = 'report-1';
  public chartData1 = [];
  public chartData2 = [];
  public chartData3 = [];
  public allOffices = [];

  constructor(
    private reportService: ReportService,
    private officeService: OfficeService,
    private loadingHelper: LoadingHelper,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // this.loadingHelper.present();
    this.getOffices();
    this.getReport1Data();
  }
  
  ngAfterViewInit() {
  }

  segmentChanged(event) {
    this.cd.detectChanges();
    this.currentSegment = event.detail.value;

    if (this.currentSegment === 'report-3') {
      this.getReport3Data({});
    }
  }

  async getOffices() {
    this.officeService.getOffices().subscribe(async (response) => {
      this.allOffices = response ? response : [];
    });
  }

  async getReport1Data(officeId = null) {
    this.reportService.getReport1(officeId).subscribe(async (response) => {
      if (response) {
        this.chartData1 = response;
      }
      this.loadingHelper.dismiss();
    });
  }

  async getReport2Data(response) {
    this.reportService.getReport2(response.office, response.date_from, response.date_to).subscribe(async (response) => {
      if (response) {
        this.chartData2 = response;
      }
      this.loadingHelper.dismiss();
    });
  }

  async getReport3Data(response) {
    this.reportService.getReport3(response.office, response.date_from, response.date_to).subscribe(async (response) => {
      if (response) {
        this.chartData3 = response;
      }
      this.loadingHelper.dismiss();
    });
  }

  filterEvent(response) {
    console.log(response);
    this.loadingHelper.present();
    if (this.currentSegment === 'report-1') {
      this.getReport1Data(response.office);
    }
    if (this.currentSegment === 'report-2') {
      this.getReport2Data(response);
    }
    if (this.currentSegment === 'report-3') {
      this.getReport3Data(response);
    }
  }

  get enabledDateFilter() {
    return this.currentSegment !== 'report-1' ? true : false;
  }

  get totalFilters() {
    return this.currentSegment !== 'report-1' ? 2 : 1;
  }
}
