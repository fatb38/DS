import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faRotateRight, faWineBottle} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace wrap>
        <KitButton type="primary">Primary Button</KitButton>
        <KitButton type="secondary">Secondary Button</KitButton>
        <KitButton type="tertiary">Tertiary Button</KitButton>
        <KitButton type="text">Text Button</KitButton>
        <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
        <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} href="#">
            Link button
        </KitButton>
        <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} href="#">
            Redirect button
        </KitButton>
    </KitSpace>
);

export default App;
