import {KitMenu} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
        <KitSpace direction="vertical" style={{width: '350px'}}>
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                onSelectChange={e => console.log('selected', e.target.checked)}
            />
            <KitMenu.Item
                title="Item menu"
                icon={<FontAwesomeIcon icon={faHouse} />}
                onSelectChange={e => console.log('selected', e.target.checked)}
                isSelected
            />
        </KitSpace>
    </div>
);

export default App;
