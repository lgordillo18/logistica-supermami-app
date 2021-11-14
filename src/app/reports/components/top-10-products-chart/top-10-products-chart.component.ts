import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'top-10-products-chart-component',
  templateUrl: './top-10-products-chart.component.html',
  styleUrls: ['./top-10-products-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Top10ProductsChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  @Input() data = [];
  chartData = [];
  barChart: any;
  chartLabels = [];
  chartQuantities = [];

  constructor() {}

  ngOnChanges() {
    if (this.barChart) {
      this.barChart.destroy();
      this.chartLabels = [];
      this.chartQuantities = [];
      this.prepareData();
      this.loadChart();
    }
  }

  prepareData() {
    this.chartData = this.data.slice(0, 10);
    this.chartData.forEach(item => {
      this.chartLabels.push(item.product_name);
      this.chartQuantities.push(item.product_quantity);
    });
  }

  ngAfterViewInit() {
    this.prepareData();
    this.loadChart();
  }

  loadChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            barPercentage: 1,
            barThickness: 'flex',
            label: 'Cantidad',
            stack: 'Base',
            backgroundColor: '#5697fa',
            data: this.chartQuantities
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Top 10 de productos mas solicitados'
          }
        }
      }
    });
  }
}