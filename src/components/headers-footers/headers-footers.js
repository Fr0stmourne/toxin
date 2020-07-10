import MainHeader from '../main-header/MainHeader';
import '../main-footer/main-footer';
import './headers-footers.scss';

$('.js-main-header').each((_, el) => new MainHeader(el));
