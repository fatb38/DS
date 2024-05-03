import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFloppyDisk} from '@fortawesome/free-regular-svg-icons';

const App = () => (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '350px'}}>
                <KitMenu.Item title="Save view" icon={<FontAwesomeIcon icon={faFloppyDisk} />} type="default" />
                <KitMenu.Item title="Save view" icon={<FontAwesomeIcon icon={faFloppyDisk} />} type="cta" />
                <KitMenu.Item title="Save view" icon={<FontAwesomeIcon icon={faFloppyDisk} />} type="ctaDanger" />
            </KitSpace>
        </div>
    );

export default App;
