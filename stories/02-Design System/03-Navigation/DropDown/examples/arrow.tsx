import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';

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

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace wrap>
            <KitDropDown menu={{items}} placement="bottomLeft" arrow>
                <KitButton>bottomLeft</KitButton>
            </KitDropDown>
            <KitDropDown menu={{items}} placement="bottom" arrow>
                <KitButton>bottom</KitButton>
            </KitDropDown>
            <KitDropDown menu={{items}} placement="bottomRight" arrow>
                <KitButton>bottomRight</KitButton>
            </KitDropDown>
        </KitSpace>
        <KitSpace wrap>
            <KitDropDown menu={{items}} placement="topLeft" arrow>
                <KitButton>topLeft</KitButton>
            </KitDropDown>
            <KitDropDown menu={{items}} placement="top" arrow>
                <KitButton>top</KitButton>
            </KitDropDown>
            <KitDropDown menu={{items}} placement="topRight" arrow>
                <KitButton>topRight</KitButton>
            </KitDropDown>
        </KitSpace>
    </KitSpace>
);

export default App;
