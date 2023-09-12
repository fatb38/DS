import React, {useState} from 'react';
import {KitProgress, KitSpace, KitButton} from '@kit/index';
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';

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
                <KitButton onClick={decline} type="segmented" icon={<MinusOutlined />} />
                <KitButton onClick={increase} type="segmented" icon={<PlusOutlined />} />
            </KitSpace.Compact>
        </>
    );
};

export default App;
