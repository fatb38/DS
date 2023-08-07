import React from 'react';
import {Col as AntdCol} from 'antd';
import {KitColProps} from './types';

const KitCol: React.FunctionComponent<KitColProps> = rowProps => {
    return <AntdCol {...rowProps}></AntdCol>;
};

export default KitCol;
