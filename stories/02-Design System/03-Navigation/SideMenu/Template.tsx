import {KitSideMenu} from '@kit/Navigation';
import {IEditorTemplate} from '../../../types';
import {IKitSideMenu} from '@kit/Navigation/SideMenu/types';
import {items} from './data';

export const Template = (args: IKitSideMenu) => (
    <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
        <KitSideMenu {...args} items={items} />
    </div>
);

export const EditorTemplate: IEditorTemplate = () => (
    <div style={{width: '100%', padding: '5px', background: 'lightgrey', display: 'flex', gap: '16px'}}>
        <KitSideMenu items={items} defaultActiveItemKey="activeItem" showSearch />
        <KitSideMenu items={items} defaultActiveItemKey="activeItem" showSearch open />
    </div>
);
EditorTemplate.path = 'components.SideMenu';
EditorTemplate.title = 'SideMenu';
