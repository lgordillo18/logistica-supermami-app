import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'ticket-status-by-office-chart-component',
  templateUrl: './ticket-status-by-office-chart.component.html',
  styleUrls: ['./ticket-status-by-office-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketStatusByOfficeChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('verticalBar') private verticalBar: ElementRef;
  @Input() data = [];
  chartData = [];
  verticalBarChart: any;
  chartLabels = [];
  chartDatasets = [];
  pendingDataset = { label: 'Pendientes', data: [], backgroundColor: '#79796E'};
  approvalDataset = { label: 'Aprobados', data: [], backgroundColor: '#299E0F'};
  rejectedDataset = { label: 'Rechazados', data: [], backgroundColor: '#A20F0F'};
  cancelledDataset = { label: 'Cancelados', data: [], backgroundColor: '#F68C05'};
  delayedDataset = { label: 'Entregados', data: [], backgroundColor: '#700D6F'};

  constructor() {}

  ngOnChanges() {
    if (this.verticalBarChart) {
      this.verticalBarChart.destroy();
      this.chartLabels = [];
      this.data.forEach(item => {
        this.chartLabels.push(item.office_name);
        if (item.status === 'pendiente') {
          this.pendingDataset.data.push(item.total);
        }
        if (item.status === 'aprobado') {
          this.approvalDataset.data.push(item.total);
        }
        if (item.status === 'rechazado') {
          this.rejectedDataset.data.push(item.total);
        }
        if (item.status === 'cancelado') {
          this.cancelledDataset.data.push(item.total);
        }
        if (item.status === 'entregado') {
          this.delayedDataset.data.push(item.total);
        }
      });
      // Elimino los repetidos
      this.chartLabels = this.chartLabels.filter(onlyUnique);
      this.loadChart();
    }
  }

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    this.verticalBarChart = new Chart(this.verticalBar.nativeElement, {
      type: 'bar',
      data: {
        labels: this.chartLabels,
        datasets: [
          this.pendingDataset,
          this.approvalDataset,
          this.rejectedDataset,
          this.cancelledDataset,
          this.delayedDataset
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Estado de Tickets por sucursal'
          }
        }
      },
    });
  }
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}