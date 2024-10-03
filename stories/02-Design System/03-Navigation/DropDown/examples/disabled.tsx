import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {disabledAndDividerDropdownItems, groupDropdownItems} from '../commons.tsx';

const App = () => (
    <KitSpace size="m">
        <KitDropDown
            menu={{
                items: disabledAndDividerDropdownItems
            }}
        >
            <KitTypography.Link>
                Divider and disabled <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
            </KitTypography.Link>
        </KitDropDown>
        <KitDropDown
            menu={{
                items: groupDropdownItems
            }}
        >
            <KitTypography.Link>
                Groups <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
            </KitTypography.Link>
        </KitDropDown>
    </KitSpace>
);

export default App;
