import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitRedirectCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace size="l">
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            icon={<FontAwesomeIcon icon={faCheese} />}
        />
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            icon={<img src="public/images/pim-logo.svg" alt="Omnipublish logo" />}
        />
    </KitSpace>
);

export default App;
