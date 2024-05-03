import {KitHeader} from '@kit/Navigation';
import {KitInput} from '@kit/DataEntry';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {langSwitcherExample} from '../commons';

const App = () => (
        <KitHeader langSwitcher={langSwitcherExample}>
            <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
        </KitHeader>
    );

export default App;
