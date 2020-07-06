import MainHeader from '../../components/main-header/MainHeader';
import '../../components/main-footer/main-footer';
import './headers-footers.scss';

$('.js-main-header').each((_, el) => new MainHeader(el));
