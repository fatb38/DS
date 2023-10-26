import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="xs" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="s" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="m" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="l" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="xl" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
