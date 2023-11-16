import React, {useState} from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <KitSpace size="m">
            <KitColorPicker showText />
            <KitColorPicker showText={color => <span>Custom Text: {color.toHexString()}</span>} />
            <KitColorPicker
                open={open}
                onOpenChange={setOpen}
                showText={() => <FontAwesomeIcon icon={faChevronDown} rotation={open ? 180 : undefined} />}
            />
        </KitSpace>
    );
};

export default App;
