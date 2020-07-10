import MaskedField from '../masked-text-field/MaskedField';

import '../toxin-header/toxin-header';
import '../toxin-footer/toxin-footer';
import '../registration/registration';
import './registration-page.scss';

$('.js-date').each((_, el) => new MaskedField(el));
