import {KitHeader} from '@kit/Navigation';
import {KitInput} from '@kit/DataEntry';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {menuContentExample, userProfileExample, langSwitcherExample} from '../commons';

const App = () => {
    return (
        <KitHeader
            menu={menuContentExample}
            logo={<img src="public/images/omnipublish-logo.svg" />}
            profile={userProfileExample}
            langSwitcher={langSwitcherExample}
        >
            <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
        </KitHeader>
    );
};

export default App;
