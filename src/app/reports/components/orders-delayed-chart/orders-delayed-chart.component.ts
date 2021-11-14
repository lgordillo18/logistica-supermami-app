import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'orders-delayed-chart-component',
  templateUrl: './orders-delayed-chart.component.html',
  styleUrls: ['./orders-delayed-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersDelayedChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @Input() data = [];
  chartData = [];
  doughnutChart: any;
  chartLabels = [];
  chartQuantities = [];

  constructor() {}

  ngOnChanges() {
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
      this.chartLabels = [];
      this.chartQuantities = [];
      this.data.forEach(item => {
        this.chartLabels.push(item.full_name);
        this.chartQuantities.push(item.total);
      });
      this.loadChart();
    }
  }

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Cantidades',
          data: this.chartQuantities,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Tickets de pedido entregados por repartidor'
          }
        }
      },
    });
  }
}