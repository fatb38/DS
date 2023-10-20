import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faPowerOff, faRotateRight} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                </KitSpace.Compact>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
