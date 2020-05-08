import 'webpack-jquery-ui';

import 'bxslider/dist/jquery.bxslider.min';
import 'bxslider/dist/jquery.bxslider.min.css';

import '../scss/main.scss';
import '../scss/utils/variables.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../pug/', true, /\.js$/));
