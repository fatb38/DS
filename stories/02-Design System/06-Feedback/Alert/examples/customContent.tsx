import React from 'react';
import {KitAlert, KitButton} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWineBottle} from '@fortawesome/free-solid-svg-icons';

const customContent = (
    <KitButton
        type="redirect"
        danger
        icon={<FontAwesomeIcon icon={faWineBottle} />}
        href="#"
        style={{display: 'inline-flex'}}
    >
        Redirect button
    </KitButton>
);

const App = () => <KitAlert type="error" message="Success Text" customContent={customContent} />;

export default App;
