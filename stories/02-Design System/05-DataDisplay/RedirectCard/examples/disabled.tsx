import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitRedirectCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="horizontal">
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            icon={<FontAwesomeIcon icon={faCheese} />}
            disabled
        />
        <KitRedirectCard
            title="This is a title"
            description="This is a short description"
            imageSrc="public/images/free-copyright.jpeg"
            disabled
        />
    </KitSpace>
);

export default App;
