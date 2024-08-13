import All from './all';
import Basic from './basic';
import Lang from './lang';
import Menu from './menu';
import Profile from './profile';
import ProfileComplement from './profileComplement';
import Logo from './logo';

import AllSource from './all?raw';
import BasicSource from './basic?raw';
import LangSource from './lang?raw';
import MenuSource from './menu?raw';
import ProfileSource from './profile?raw';
import ProfileComplementSource from './profileComplement?raw';
import LogoSource from './logo?raw';

export const Sources = {
    All: AllSource,
    Basic: BasicSource,
    Lang: LangSource,
    Menu: MenuSource,
    Profile: ProfileSource,
    ProfileComplement: ProfileComplementSource,
    Logo: LogoSource
};

export default {
    All,
    Basic,
    Lang,
    Menu,
    Profile,
    ProfileComplement,
    Logo
};
