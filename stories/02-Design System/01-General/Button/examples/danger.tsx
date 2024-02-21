import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace wrap>
            <KitButton type="primary" danger>
                Primary
            </KitButton>
            <KitButton danger>Default</KitButton>
            <KitButton type="text" danger>
                Text
            </KitButton>
            <KitButton type="tertiary" danger>
                Link
            </KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
        </KitSpace>
    );
};

export default App;
