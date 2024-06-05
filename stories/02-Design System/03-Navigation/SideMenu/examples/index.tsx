import menuBasic from './SideMenu/menuBasic';
import menuActive from './SideMenu/menuActive';
import menuDisabled from './SideMenu/menuDisabled';
import menuSearch from './SideMenu/menuSearch';
import menuSeparator from './SideMenu/menuSeparator';

import menuBasicSource from './SideMenu/menuBasic?raw';
import menuActiveSource from './SideMenu/menuActive?raw';
import menuDisabledSource from './SideMenu/menuDisabled?raw';
import menuSearchSource from './SideMenu/menuSearch?raw';
import menuSeparatorSource from './SideMenu/menuSeparator?raw';

export const Sources = {
    menuBasic: menuBasicSource,
    menuActive: menuActiveSource,
    menuDisabled: menuDisabledSource,
    menuSearch: menuSearchSource,
    menuSeparator: menuSeparatorSource
};

export default {
    menuBasic,
    menuActive,
    menuDisabled,
    menuSearch,
    menuSeparator
};
