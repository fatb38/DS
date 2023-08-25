import React, {useState} from 'react';
import {KitImage} from '@kit/DataDisplay';

const App = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <KitImage
                preview={{visible: false}}
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                onClick={() => setVisible(true)}
            />
            <div style={{display: 'none'}}>
                <KitImage.PreviewGroup preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                    <KitImage src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                    <KitImage src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                    <KitImage src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                </KitImage.PreviewGroup>
            </div>
        </>
    );
};

export default App;
