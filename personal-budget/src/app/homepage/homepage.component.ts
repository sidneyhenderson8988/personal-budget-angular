import { AfterViewInit, Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#2bcf57',
                '#db1414',
                '#8c27cf',
            ],
        }
    ],

// These labels appear in the legend and in the tooltips when hovering different arcs
labels: []
};

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-var-keyword
      for (var i = 0; i < res.myBudget.length; i++){
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;

      }
      this.createChart();
    });
  }

  // tslint:disable-next-line: typedef
  createChart() {
    // tslint:disable: no-var-keyword
    // tslint:disable: prefer-const
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
}
}
