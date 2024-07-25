import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitRedirectCard} from '@kit/DataDisplay';

const App = () => (
    <KitRedirectCard
        title="This is a title"
        description="This is a short description"
        icon={<FontAwesomeIcon icon={faCheese} />}
    />
);

export default App;
