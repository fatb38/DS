import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faWineBottle} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace wrap>
        <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} href="#">
            Link button
        </KitButton>
        <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} href="#">
            Redirect button
        </KitButton>
        <KitButton
            type="link"
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            href="http://aristid.com"
            target="_blank"
        >
            Link button target _blank
        </KitButton>
        <KitButton
            type="redirect"
            icon={<FontAwesomeIcon icon={faWineBottle} />}
            href="http://aristid.com"
            target="_blank"
        >
            Redirect button target _blank
        </KitButton>
    </KitSpace>
);

export default App;
