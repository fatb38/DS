import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="text" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                <KitButton type="text" color="grey" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                <KitButton type="text" color="black" icon={<FontAwesomeIcon icon={faRotateRight} />} />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="text" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                    Refresh
                </KitButton>
                <KitButton type="text" color="grey" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                    Refresh
                </KitButton>
                <KitButton type="text" color="black" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                    Refresh
                </KitButton>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
