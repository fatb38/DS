import React, {useState} from 'react';
import {KitImage} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';

const App = () => {
    const [random, setRandom] = useState<any>();

    return (
        <KitSpace size={12}>
            <KitImage
                width={200}
                src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                placeholder={
                    <KitImage
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width={200}
                    />
                }
            />
            <KitButton
                type="primary"
                onClick={() => {
                    setRandom(Date.now());
                }}
            >
                Reload
            </KitButton>
        </KitSpace>
    );
};

export default App;
