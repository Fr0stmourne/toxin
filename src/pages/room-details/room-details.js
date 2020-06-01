import { RangeDatepicker, defaultOptions, inlineOptions } from '../../components/range-datepicker/RangeDatePicker';
import Dropdown from '../../components/dropdown/Dropdown';
import LikeBtn from '../../components/like-btn/LikeBtn';
import DoughnutChart from '../../components/room-impression/DoughnutChart';

const setup = [
  ['rgb(255, 227, 156)', 'rgb(255, 186, 156)'],
  ['rgb(111, 207, 151)', 'rgb(102, 210, 234)'],
  ['rgb(188, 156, 255)', 'rgb(139, 164, 249)'],
  ['rgb(144, 144, 144)', 'rgb(61, 73, 117)'],
];
const dataSet = [130, 65, 65, 0];
const labels = ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'];

document
  .querySelectorAll('.js-doughnut-chart')
  .forEach(el => new DoughnutChart({ chartElement: el, colorsSetup: setup, dataSet, labels }));

$('.js-like-btn').each((_, el) => new LikeBtn(el));

$('.js-dropdown').each((_, el) => new Dropdown(el));

$('.js-range-datepicker').each((_, el) => new RangeDatepicker(el, defaultOptions));
$('.js-range-datepicker-inline').each((_, el) => new RangeDatepicker(el, inlineOptions));
