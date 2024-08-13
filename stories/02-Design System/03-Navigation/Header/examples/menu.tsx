import {KitHeader} from '@kit/Navigation';
import {KitInput} from '@kit/DataEntry';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const menuContentExample = (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <img src="public/images/omnipublish-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/pim-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/dam-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
    </div>
);

const App = () => (
    <KitHeader menu={menuContentExample} logo={<img src="public/images/omnipublish-logo.svg" alt="" />}>
        <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </KitHeader>
);

export default App;
