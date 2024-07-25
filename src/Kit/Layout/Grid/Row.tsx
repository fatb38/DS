import {FunctionComponent} from 'react';
import {Row as AntdRow} from 'antd';
import {IKitRow} from './types';

const KitRow: FunctionComponent<IKitRow> = rowProps => <AntdRow {...rowProps}></AntdRow>;

export default KitRow;
