import {KitMenu} from '@kit/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
        <div style={{width: '350px'}}>
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                onRafterClick={() => console.log('click rafter')}
            />
        </div>
    </div>
);

export default App;
