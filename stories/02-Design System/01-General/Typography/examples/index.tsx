import Basic from './basic';
import Ellispis from './ellispis';
import Suffix from './suffix';
import TextLink from './textLink';
import Color from './color';
import SuffixEllipsis from './suffixEllipsis';

import BasicSource from './basic?raw';
import EllispisSource from './ellispis?raw';
import SuffixSource from './suffix?raw';
import TextLinkSource from './textLink?raw';
import ColorSource from './color?raw';
import SuffixEllipsisSource from './suffixEllipsis?raw';

export const Sources = {
    Basic: BasicSource,
    Ellispis: EllispisSource,
    SuffixEllipsis: SuffixEllipsisSource,
    Suffix: SuffixSource,
    TextLink: TextLinkSource,
    Color: ColorSource
};

export default {
    Basic,
    Ellispis,
    SuffixEllipsis,
    Suffix,
    TextLink,
    Color
};
