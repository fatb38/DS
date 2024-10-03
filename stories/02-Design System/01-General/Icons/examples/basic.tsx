import {KitIcon, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace>
        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} />
        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on />
    </KitSpace>
);

export default App;
