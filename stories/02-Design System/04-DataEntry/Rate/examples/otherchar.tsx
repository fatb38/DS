import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle as faCircleDefault} from '@fortawesome/free-regular-svg-icons';
import {faCircle as faCircleActive} from '@fortawesome/free-solid-svg-icons';
import {faCircleHalfStroke as faCircleHalf} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace direction="vertical">
        <KitRate
            allowHalf
            value={2.5}
            defaultIcon={<FontAwesomeIcon icon={faCircleDefault} />}
            halfIcon={<FontAwesomeIcon icon={faCircleHalf} />}
            activeIcon={<FontAwesomeIcon icon={faCircleActive} />}
        />
    </KitSpace>
);

export default App;
