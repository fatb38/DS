import React from 'react';
import {Row as AntdRow} from 'antd';
import {KitRowProps} from './types';

const KitRow: React.FunctionComponent<KitRowProps> = rowProps => {
    return <AntdRow {...rowProps}></AntdRow>;
};

export default KitRow;
