import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit {

  public chart?: Chart;

  ngOnInit(): void {

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        label: 'Alumnos Inscritos',
        data: [65, 59, 77, 81, 51, 65, 78],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    this.chart = new Chart("chart", {
      type: 'line',
      data
    })
  }
}
