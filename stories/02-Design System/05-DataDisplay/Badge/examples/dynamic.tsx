import React, {useState} from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General';
import {KitSwitch} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus, faQuestion} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [count, setCount] = useState(5);
    const [show, setShow] = useState(true);

    const increase = () => {
        setCount(count + 1);
    };

    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount);
    };

    const random = () => {
        const newCount = Math.floor(Math.random() * 100);
        setCount(newCount);
    };

    const onChange = (checked: boolean) => {
        setShow(checked);
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace size="m">
                <KitBadge count={count}>
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitButton onClick={decline} icon={<FontAwesomeIcon icon={faMinus} />} />
                <KitButton onClick={increase} icon={<FontAwesomeIcon icon={faPlus} />} />
                <KitButton onClick={random} icon={<FontAwesomeIcon icon={faQuestion} />} />
            </KitSpace>
            <br />
            <KitSpace size="m">
                <KitBadge dot={show}>
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitSwitch onChange={onChange} checked={show} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
