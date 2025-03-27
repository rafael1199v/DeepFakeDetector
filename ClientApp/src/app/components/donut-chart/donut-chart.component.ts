import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css'
})
export class DonutChartComponent implements OnChanges{

  chart: any;
  @Input() fakePercentage: number = 0;
  @Input() realPercentage: number = 0;

 
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['fakePercentage'] || changes['realPercentage']) {
      this.updateChart();
    }
  }

  initChart() : void {
    this.fakePercentage *= 100;
    this.realPercentage *= 100;

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ["Fake", "Real"],
        datasets: [
          {
            data: [this.fakePercentage, this.realPercentage],
            backgroundColor: ['rgba(216, 20, 20, 1)', 'rgba(13, 108, 17, 1)',],
          },
        ]
      }
    })
  }


  updateChart() : void {
    if(this.chart) {
      this.chart.data.datasets[0].data = [this.fakePercentage * 100, this.realPercentage * 100]
      this.chart.update();
    }
    else {
      this.initChart();
    }
  }
}
