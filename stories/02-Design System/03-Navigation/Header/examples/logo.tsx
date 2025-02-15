import {KitHeader} from '@kit/Navigation';
import {KitInput} from '@kit/DataEntry';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => (
    <KitHeader logo={<img src="public/images/omnipublish-logo.svg" alt="" />}>
        <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </KitHeader>
);

export default App;
