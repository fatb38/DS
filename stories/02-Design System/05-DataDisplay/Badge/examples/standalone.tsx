import React, {useState} from 'react';
import {KitBadge} from '@kit/DataDisplay/';
import {KitSwitch} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout/';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const {theme} = useKitTheme();

    const [show, setShow] = useState(true);

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitSwitch checked={show} onChange={() => setShow(!show)} />
            </KitSpace>
            <KitSpace>
                <KitBadge count={show ? 11 : 0} showZero />
                <KitBadge count={show ? 25 : 0} />
                <KitBadge
                    count={
                        show ? (
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{color: theme.general.colors.secondary.red.red400}}
                            />
                        ) : (
                            0
                        )
                    }
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
