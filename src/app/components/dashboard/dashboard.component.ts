import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
ALL='ALL'
Today='Today'
  constructor() { }

  ngOnInit(): void {
  }
  chartOption: EChartOption = {
    color: ['#6C65D9'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    xAxis: {
      type: 'category',
      data: ['1 March 2020', '2 March 2020', '3 March 2020', '4 March 2020', '5 March 2020', '6 March 2020', '7 March 2020'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

}
