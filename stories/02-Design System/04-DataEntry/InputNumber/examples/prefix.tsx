import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressBook, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const App = () => (
        <KitSpace>
            <KitInputNumber prefix={<FontAwesomeIcon icon={faAddressBook} />} />
            <KitInputNumber prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} disabled={true} />
        </KitSpace>
    );

export default App;
