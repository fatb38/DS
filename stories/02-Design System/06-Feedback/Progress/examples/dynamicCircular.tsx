import React, {useState} from 'react';
import {KitProgress, KitSpace, KitButton} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [percent, setPercent] = useState(0);

    const increase = () => {
        setPercent(prevPercent => {
            const newPercent = prevPercent + 10;
            if (newPercent > 100) {
                return 100;
            }
            return newPercent;
        });
    };

    const decline = () => {
        setPercent(prevPercent => {
            const newPercent = prevPercent - 10;
            if (newPercent < 0) {
                return 0;
            }
            return newPercent;
        });
    };

    return (
        <>
            <KitProgress percent={percent} style={{marginRight: 8}} />
            <KitSpace.Compact>
                <KitButton onClick={decline} type="segmented" icon={<FontAwesomeIcon icon={faMinus} />} />
                <KitButton onClick={increase} type="segmented" icon={<FontAwesomeIcon icon={faPlus} />} />
            </KitSpace.Compact>
        </>
    );
};

export default App;
