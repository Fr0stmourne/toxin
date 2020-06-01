import MaskedField from '../../components/masked-text-field/MaskedField';

import '../../components/toxin-header/toxin-header';
import '../../components/toxin-footer/toxin-footer';
import '../../components/registration/registration';

$('.js-date').each((_, el) => new MaskedField(el));
