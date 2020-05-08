import 'webpack-jquery-ui';

import 'bxslider/dist/jquery.bxslider.min';
import 'bxslider/dist/jquery.bxslider.min.css';

import '../scss/main.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../components/', true, /\.js$/));
importAll(require.context('../../src', true, /\.(jpeg|jpg|png|gif|svg)$/));
