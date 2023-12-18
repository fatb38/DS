import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

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

const App = () => {
    const {theme} = useKitTheme();
    return (
        <KitSpace>
            <KitDropDown menu={{items}} trigger={['contextMenu']}>
                <div
                    style={{
                        background: theme.general.colors.neutral.background,
                        height: 200,
                        width: 600,
                        textAlign: 'center',
                        lineHeight: '200px'
                    }}
                >
                    <KitTypography.Text>Right Click on here</KitTypography.Text>
                </div>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
