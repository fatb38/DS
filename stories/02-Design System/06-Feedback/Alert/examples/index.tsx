import Basic from './basic';
import Closable from './closable';
import Description from './description';
import Icon from './icon';
import Types from './types';
import Details from './details';
import CustomContent from './customContent';
import Toastable from './toastable';

import BasicSource from './basic?raw';
import ClosableSource from './closable?raw';
import DescriptionSource from './description?raw';
import IconSource from './icon?raw';
import TypesSource from './types?raw';
import DetailsSource from './details?raw';
import CustomContentSource from './customContent?raw';
import ToastableSource from './toastableSource?raw';

export const Sources = {
    Basic: BasicSource,
    Closable: ClosableSource,
    Description: DescriptionSource,
    Icon: IconSource,
    Types: TypesSource,
    Details: DetailsSource,
    CustomContent: CustomContentSource,
    Toastable: ToastableSource
};

export default {
    Basic,
    Closable,
    Description,
    Icon,
    Types,
    Details,
    CustomContent,
    Toastable
};
