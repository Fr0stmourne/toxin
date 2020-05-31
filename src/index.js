import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'jquery/dist/jquery';
import 'normalize.css';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./pages/', true, /\.js$/));
importAll(require.context('./', true, /\.scss$/));
importAll(require.context('./', true, /\.(jpeg|jpg|png|gif|svg)$/));
