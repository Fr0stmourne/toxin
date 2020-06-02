/* eslint-disable no-undef */
/* eslint-disable no-new */
import 'chart.js/dist/Chart.bundle';

export default class DoughnutChart {
  constructor({ chartElement, colorsSetup, dataSet, labels }) {
    this.chart = chartElement;
    this.setup = colorsSetup;
    this.dataSet = dataSet;
    this.labels = labels;
    this.colors = [];

    this.createColorsArray();
    this.init();
  }

  createColorsArray() {
    const chartCtx = this.chart.getContext('2d');

    const gradientOne = chartCtx.createLinearGradient(0, 0, 0, 220);
    const gradientTwo = chartCtx.createLinearGradient(0, 0, 0, 220);
    const gradientThree = chartCtx.createLinearGradient(0, 0, 0, 220);
    const gradientFour = chartCtx.createLinearGradient(0, 0, 0, 220);

    for (let i = 0; i < 4; i += 1) {
      switch (i) {
        case 0:
          gradientOne.addColorStop(0, this.setup[i][0]);
          gradientOne.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientOne);
          break;
        case 1:
          gradientTwo.addColorStop(0, this.setup[i][0]);
          gradientTwo.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientTwo);
          break;
        case 2:
          gradientThree.addColorStop(0, this.setup[i][0]);
          gradientThree.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientThree);
          break;
        case 3:
          gradientFour.addColorStop(0, this.setup[i][0]);
          gradientFour.addColorStop(1, this.setup[i][1]);
          this.colors.push(gradientFour);
          break;
        default:
          break;
      }
    }
  }

  init() {
    new Chart(this.chart, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: this.colors,
            data: this.dataSet,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: false,
        cutoutPercentage: 90,
        rotation: (Math.PI * 1) / 2,
      },
    });
  }
}
