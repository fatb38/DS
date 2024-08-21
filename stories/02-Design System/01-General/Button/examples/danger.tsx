import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faWineBottle} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace wrap>
        <KitButton type="primary" danger>
            Primary
        </KitButton>
        <KitButton danger>Secondary</KitButton>
        <KitButton type="tertiary" danger>
            Tertiary
        </KitButton>
        <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
            Link
        </KitButton>
        <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} danger>
            Redirect
        </KitButton>
        <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
    </KitSpace>
);

export default App;
