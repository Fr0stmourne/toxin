import { boundMethod } from 'autobind-decorator';

import '../button/button';
import '../header-nav/header-nav';
import './main-header.scss';

class MainHeader {
  constructor(header) {
    this.init(header);
  }

  findElements() {
    this.$button = $(this.$container).find('.main-header__menu-button');
    this.$menu = $(this.$container).find('.main-header__menu');
  }

  @boundMethod
  toggleButton() {
    this.$button.toggleClass('main-header__menu-button_active');
    this.$menu.toggleClass('main-header__menu_opened');
  }

  init(header) {
    this.$container = header;

    this.findElements();
    this.$button.on('click', this.toggleButton);
  }
}

export default MainHeader;
