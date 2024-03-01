import React from 'react';
import {KitImage} from '@kit/DataDisplay';

const App = () => {
    return (
        <KitImage.PreviewGroup
            preview={{
                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
            }}
        >
            <KitImage width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <KitImage
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFunctionComponent8Sj7n/method-draw-image.svg"
            />
        </KitImage.PreviewGroup>
    );
};

export default App;
