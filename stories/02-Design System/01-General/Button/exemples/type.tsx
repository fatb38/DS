import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace wrap>
            <KitButton type="primary">Primary Button</KitButton>
            <KitButton>Default Button</KitButton>
            <KitButton type="text">Text Button</KitButton>
            <KitButton type="link">Link Button</KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
        </KitSpace>
    );
};

export default App;
