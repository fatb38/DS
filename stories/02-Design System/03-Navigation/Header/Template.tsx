import {IKitHeader} from '@kit/Navigation/Header/types';
import {KitHeader} from '@kit/Navigation';
import {IEditorTemplate} from 'stories/types';
import {menuContentExample, userProfileExample, langSwitcherExample, logoExample} from './commons';

interface ITemplate extends IKitHeader {
    menu: string;
    logo: string;
    userProfile: string;
    langSwitcher: string;
}

export const Template = (args: IKitHeader) => {
    const {menu, logo, profile, langSwitcher, ...props} = args as ITemplate;
    return (
        <KitHeader
            menu={menu ? menuContentExample : undefined}
            logo={logo ? <img src={`public/images/${logo}`} /> : undefined}
            profile={profile ? userProfileExample : undefined}
            langSwitcher={langSwitcher ? langSwitcherExample : undefined}
            {...props}
        />
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitHeader
            menu={menuContentExample}
            logo={logoExample}
            profile={userProfileExample}
            langSwitcher={langSwitcherExample}
        />
    );
};
EditorTemplate.path = 'components.Header';
EditorTemplate.title = 'Header';
