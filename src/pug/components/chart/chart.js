/* eslint-disable */
import 'chart.js/dist/Chart.bundle';

new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [
      {
        label: 'Population (millions)',
        backgroundColor: ['#FFE39C', '#BC9CFF','#6FCF97', '#909090'],
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
