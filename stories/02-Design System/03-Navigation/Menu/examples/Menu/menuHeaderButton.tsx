import React from 'react';
import {KitMenu} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout/';
import {KitInput} from '@kit/DataEntry';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <div style={{width: '100%', padding: '5px', background: 'lightgrey'}}>
            <KitSpace direction="vertical" style={{width: '400px'}}>
                <KitMenu
                    title="View options"
                    onCloseClick={() => console.log('on click close')}
                    primaryInput={<KitInput placeholder="Opération #1" />}
                />
                <KitMenu
                    title="View options"
                    onCloseClick={() => console.log('on click close')}
                    segmentedButton={
                        <KitButton
                            type="segmented"
                            segmentedColor="green"
                            segmentedActived
                            icon={<FontAwesomeIcon icon={faHouse} />}
                        />
                    }
                    primaryInput={<KitInput placeholder="Opération #1" />}
                />
                <KitMenu
                    title="View options"
                    onCloseClick={() => console.log('on click close')}
                    segmentedButton={
                        <KitButton
                            type="segmented"
                            segmentedColor="green"
                            segmentedActived
                            icon={<FontAwesomeIcon icon={faHouse} />}
                        />
                    }
                    primaryInput={<KitInput placeholder="Opération #1" />}
                    secondaryInput={<KitInput placeholder="Description" />}
                />
            </KitSpace>
        </div>
    );
};

export default App;
