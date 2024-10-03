import {KitMenu} from '@kit/Navigation';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => (
    <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
        <div style={{width: '350px'}}>
            <KitMenu.Item title="Item menu" icon={<FontAwesomeIcon icon={faHouse} />} value="Valeur" />
        </div>
    </div>
);

export default App;
