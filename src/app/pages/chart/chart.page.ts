// / eslint-disable no-trailing-spaces /
import { Component, ViewChild } from '@angular/core';
import { BarController } from 'chart.js';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage {
  // @ViewChild('barChart') barChart;
  labels = [2017, 2018, 2019, 2020, 2021, 2022, 2023];
  data1 = [10, 20, 40, 32, 10, 15, 20];
  data2 = [20, 38, 20, 30, 50, 5, 18];
  data3 = [70, 60, 50, -40, 30, 20, 18];
  bgColor1 = 'rgba(88, 136, 191, 0.2)';
  bgColor2 = 'rgba(244, 255, 92,0.6)';
  bgColor3 = 'rgba(255, 99, 132, 0.2)';
  borderColor1 = '#5888bf';
  borderColor2 = '#ffff1f';
  borderColor3 = 'rgb(255, 99, 132)';
  bars: any;
  colorArray: any;
  constructor() {}

  ionViewDidEnter() {
    this.lineChart();
    this.barChart();
    this.radarChart();
    this.doughnutChart();
    this.pieChart();
    this.bubbleChart();
    this.mixedChart();
  }

  lineChart() {
    Chart.register(BarController);
    var lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            tension: 0.5,
            label: 'Type 1',
            backgroundColor: this.bgColor1,
            borderColor: this.borderColor1,
            // stack: 'Base',
            fill: true,
            data: this.data1,
            // borderCapStyle:'round',
            // borderJoinStyle:'miter'
            spanGaps: true,
          },
          {
            tension: 0.5,
            // barThickness:'flex',
            label: 'Type 2',
            backgroundColor: this.bgColor2,
            borderColor: this.borderColor2,
            pointBorderColor:this.borderColor3,
            // stack: 'Base',
            fill: true,
            data: this.data3,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  barChart() {
    var barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            barPercentage: 0.8,
            barThickness: 'flex',
            label: 'Type 1',
            backgroundColor: '#E1BA24',
            borderRadius: 0.5,
            stack: 'Base',
            data: this.data1,
          },
          {
            barPercentage: 1,
            barThickness: 'flex',
            label: 'Type 2',
            backgroundColor: '#E1BA99',
            stack: 'Sensitivity',
            data: this.data3,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  radarChart() {
    var radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data1,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            // borderDash:[10],
            borderWidth: 1,
          },
          {
            label: 'My Second Dataset',
            data: this.data2,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
            borderDash: [5],
            borderCapStyle: 'round',
          },
          {
            label: 'My Third Dataset',
            data: this.data3,
            fill: true,
            backgroundColor: this.bgColor2,
            borderColor: this.borderColor2,
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
            borderDash: [5],
            borderCapStyle: 'square',
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            // suggestedMin: 5,
            // suggestedMax: 100
          },
        },
      },
    });
  }

  doughnutChart() {
    var doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data1,
            // fill: true,
            backgroundColor: [
              this.borderColor1,
              this.borderColor2,
              this.borderColor3,
            ],
            borderColor: '#0',
            spacing: 20,
            // offset:[80],
          },
          {
            label: 'My First Dataset',
            data: this.data2,
            // fill: true,
            backgroundColor: [
              this.borderColor1,
              this.borderColor2,
              this.borderColor3,
            ],
            borderColor: '#0',
            // offset:[40],
            spacing: 20,
          },
          {
            label: 'My First Dataset',
            data: this.data3,
            // fill: true,

            backgroundColor: [
              this.borderColor1,
              this.borderColor2,
              this.borderColor3,
            ],
            borderColor: '#0',
            spacing: 20,
            // offset:[20],
          },
        ],
      },
      options: {
        cutout: '30%',
        // rotation:270,
        circumference: 360 /*this is for how much degree of view to display out of 360*/,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
        scales: {},
      },
    });
  }

  pieChart() {
    var pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data1,
            // fill: true,
            backgroundColor: [
              this.borderColor1,
              this.borderColor2,
              this.borderColor3,
            ],
            borderColor: '#0',
            // spacing:20,
            // offset:[80],
          },
          {
            label: 'My First Dataset',
            data: this.data2,
            // fill: true,
            backgroundColor: [
              this.borderColor1,
              this.borderColor2,
              this.borderColor3,
            ],
            borderColor: '#0',
            // offset:[40],
            // spacing:20
          },
          // {
          //   label: 'My First Dataset',
          //   data: this.data3,
          //   // fill: true,

          //   backgroundColor: [this.borderColor1,this.borderColor2,this.borderColor3],
          //   // borderColor: '#0',
          //   // spacing:20,
          //   // offset:[20],

          // },
        ],
      },
      options: {
        // cutout:'10%',
        // rotation:270,
        // circumference:360,/*this is for how much degree of view to display out of 360*/
        animation: {
          animateRotate: true,
          animateScale: true,
        },
        scales: {},
      },
    });
  }

  bubbleChart() {
    var bubbleChart = new Chart('bubbleChart', {
      type: 'bubble',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data3,
            // fill: true,
            // backgroundColor: [this.borderColor1,this.borderColor2,this.borderColor3],
            borderColor: this.borderColor1,
            backgroundColor: this.bgColor3,
            pointStyle: 'crossRot',
            radius: [5],
            hoverBackgroundColor: '#fff',
            hoverBorderColor: '#000',
            // spacing:20,
            // offset:[80],
          },
          {
            label: 'My Second Dataset',
            data: this.data2,
            // clip:{left:1,top:2},
            // backgroundColor: [this.borderColor1,this.borderColor2,this.borderColor3],
            borderColor: this.borderColor3,
            backgroundColor: this.bgColor3,
            pointStyle: 'rectRounded',
            radius: [10],
            hoverBackgroundColor: '#fff',
            hoverBorderColor: '#000',
            // spacing:20,
            // offset:[80],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            // beginAtZero: ,
          },
        },
      },
    });
  }

  mixedChart() {
    var mixedChart = new Chart('mixedChart', {
    type:'scatter',
      data: {
        datasets: [{
            type: 'bar',
            label: JSON.stringify(this.labels[0]),
            data: this.data1,
            backgroundColor:this.bgColor1,
            borderColor:this.borderColor1
        }, {
            type: 'line',
            label: JSON.stringify(this.labels[1]),
            data: this.data2,
            backgroundColor:this.borderColor2,
            borderColor:this.borderColor2
        }],
        labels: this.labels
    },
    // options: options
    })
  }
}
