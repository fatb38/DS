import React from 'react';
import {KitSpace, KitButton, KitTooltip} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <KitSpace.Compact block>
            <KitButton type="primary">Button 1</KitButton>
            <KitButton type="primary">Button 2</KitButton>
            <KitButton type="primary">Button 3</KitButton>
            <KitButton type="primary">Button 4</KitButton>
            <KitTooltip title="Tooltip">
                <KitButton type="primary" disabled>
                    <FontAwesomeIcon icon={faDownload} />
                </KitButton>
            </KitTooltip>
            <KitTooltip title="Tooltip">
                <KitButton type="primary">
                    <FontAwesomeIcon icon={faDownload} />
                </KitButton>
            </KitTooltip>
        </KitSpace.Compact>
    );
};

export default App;
