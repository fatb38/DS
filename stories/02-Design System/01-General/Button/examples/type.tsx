import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons';

const App = () => (
        <KitSpace wrap>
            <KitButton type="primary">Primary Button</KitButton>
            <KitButton type="secondary">Secondary Button</KitButton>
            <KitButton type="tertiary">Tertiary Button</KitButton>
            <KitButton type="text">Text Button</KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
        </KitSpace>
    );

export default App;
