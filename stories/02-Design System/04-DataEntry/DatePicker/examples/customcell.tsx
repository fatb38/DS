import React, {CSSProperties} from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import type {Dayjs} from 'dayjs';
import type {CellRenderInfo} from 'rc-picker/lib/interface';

const App = () => (
        <KitSpace direction="vertical">
            <KitDatePicker
                cellRender={(current: string | number | Dayjs, info: CellRenderInfo<Dayjs>) => {
                    if (info.type !== 'date') return info.originNode;

                    const style: CSSProperties = {};

                    if (typeof current !== 'number' && typeof current !== 'string') {
                        if (current.date() === 1) {
                            style.backgroundColor = '#E7EDFF';
                        }

                        return (
                            <div className="ant-picker-cell-inner" style={style}>
                                {current.date()}
                            </div>
                        );
                    }
                }}
            />
        </KitSpace>
    );

export default App;
