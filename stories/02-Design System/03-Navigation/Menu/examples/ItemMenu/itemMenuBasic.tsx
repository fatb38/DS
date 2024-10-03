import {KitMenu} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <div style={{width: '100%', padding: '5px', backgroundColor: 'lightgrey'}}>
        <KitSpace direction="vertical" style={{width: '350px'}}>
            <KitMenu.Item title="Item menu" />
            <KitMenu.Item icon={<FontAwesomeIcon icon={faHouse} />} />
            <KitMenu.Item title="Item menu" icon={<FontAwesomeIcon icon={faHouse} />} />
        </KitSpace>
    </div>
);

export default App;
