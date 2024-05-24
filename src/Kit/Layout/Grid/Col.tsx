import React, {FunctionComponent} from 'react';
import {Col as AntdCol} from 'antd';
import {IKitCol} from './types';

const KitCol: FunctionComponent<IKitCol> = rowProps => <AntdCol {...rowProps}></AntdCol>;

export default KitCol;
