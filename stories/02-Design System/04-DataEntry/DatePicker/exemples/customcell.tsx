import React, {CSSProperties} from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitDatePicker
                cellRender={(current, info) => {
                    if (info.type !== 'date') return info.originNode;

                    const style: CSSProperties = {};

                    if (current.date() === 1) {
                        style.backgroundColor = '#E7EDFF';
                    }

                    return (
                        <div className="ant-picker-cell-inner" style={style}>
                            {current.date()}
                        </div>
                    );
                }}
            />
        </KitSpace>
    );
};

export default App;
