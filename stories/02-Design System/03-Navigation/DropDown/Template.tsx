import {KitButton, KitTypography} from '@kit/General/';
import {KitDropDown} from '@kit/Navigation/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitDropdown, IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {disabledAndDividerDropdownItems, groupDropdownItems} from './commons.tsx';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                1st menu item link
            </a>
        )
    },
    {
        key: '2',
        label: '2nd menu item'
    },
    {
        key: '3',
        label: '3rd menu item'
    }
];

export const Template = (args: IKitDropdown) => (
    <KitDropDown {...args} menu={{items}}>
        <KitButton>Label</KitButton>
    </KitDropDown>
);

export const EditorTemplate: IEditorTemplate = () => {
    const items: IKitDropdownMenu['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                    1st menu item link
                </a>
            )
        },
        {
            key: '2',
            label: '2nd menu item'
        },
        {
            key: '3',
            label: '3rd menu item'
        }
    ];

    return (
        <KitSpace size="m">
            <KitDropDown menu={{items}}>
                <KitTypography.Link>
                    Basic <FontAwesomeIcon icon={faAngleDown} />
                </KitTypography.Link>
            </KitDropDown>
            <KitDropDown menu={{items, selectable: true}}>
                <KitTypography.Link>
                    Selectable <FontAwesomeIcon icon={faAngleDown} />
                </KitTypography.Link>
            </KitDropDown>
            <KitDropDown menu={{items: disabledAndDividerDropdownItems}}>
                <KitTypography.Link>
                    With divider <FontAwesomeIcon icon={faAngleDown} />
                </KitTypography.Link>
            </KitDropDown>
            <KitDropDown menu={{items: groupDropdownItems}}>
                <KitTypography.Link>
                    With groups <FontAwesomeIcon icon={faAngleDown} />
                </KitTypography.Link>
            </KitDropDown>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.DropDown';
EditorTemplate.title = 'DropDown';
