import React, {useState} from 'react';
import {KitImage} from '@kit/DataDisplay';
import {KitInputNumber} from '@kit/DataEntry';
import {KitButton} from '@kit/General';

const App = () => {
    const [visible, setVisible] = useState(false);
    const [scaleStep, setScaleStep] = useState<any>(0.5);

    return (
        <>
            <div>
                scaleStep:{' '}
                <KitInputNumber min={0.1} max={5} defaultValue={0.5} step={0.1} onChange={val => setScaleStep(val)} />
            </div>
            <br />
            <KitButton type="primary" onClick={() => setVisible(true)}>
                show image preview
            </KitButton>
            <KitImage
                width={200}
                style={{display: 'none'}}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                    visible,
                    scaleStep,
                    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    onVisibleChange: value => {
                        setVisible(value);
                    }
                }}
            />
        </>
    );
};

export default App;
