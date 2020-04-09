/* eslint-disable */
import 'chart.js/dist/Chart.bundle';

var bar_ctx = document.getElementById('doughnut-chart').getContext('2d');

const gradientOne = bar_ctx.createLinearGradient(0, 0, 0, 220);
const gradientTwo = bar_ctx.createLinearGradient(0, 0, 0, 220);
const gradientThree = bar_ctx.createLinearGradient(0, 0, 0, 220);
const gradientFour = bar_ctx.createLinearGradient(0, 0, 0, 220);
const setup = [['rgb(255, 227, 156)','rgb(255, 186, 156)'],
['rgb(111, 207, 151)','rgb(102, 210, 234)'],['rgb(188, 156, 255)','rgb(139, 164, 249)'],['rgb(144, 144, 144)','rgb(61, 73, 117)'] ]
const colors = [];

for (let i = 0; i < 4; i++) {
  switch (i) {
    case 0:
      gradientOne.addColorStop(0, setup[i][0]);
      gradientOne.addColorStop(1, setup[i][1]);
      colors.push(gradientOne);
      break;
    case 1:
      gradientTwo.addColorStop(0, setup[i][0]);
      gradientTwo.addColorStop(1, setup[i][1]);
      colors.push(gradientTwo);
      break;
    case 2:
      gradientThree.addColorStop(0, setup[i][0]);
      gradientThree.addColorStop(1, setup[i][1]);
      colors.push(gradientThree);
      break;
    case 3:
      gradientFour.addColorStop(0, setup[i][0]);
      gradientFour.addColorStop(1, setup[i][1]);
      colors.push(gradientFour);
      break;
  }
}

new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [
      {
        label: 'Population (millions)',
        // backgroundColor: ['#FFE39C', '#BC9CFF','#6FCF97', '#909090'],
        backgroundColor: colors,
        data: [130, 65, 65, 0],
      },
    ],
  },
  options: {
    legend: {
      display: false
    },
    tooltips: false,
    cutoutPercentage: 90,
    rotation: Math.PI * 1 / 2,
    
  },
});
