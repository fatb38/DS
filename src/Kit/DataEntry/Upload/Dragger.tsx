import React, {FunctionComponent} from 'react';
import {Upload as AntdUpload} from 'antd';
import {IKitDragger} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInbox} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitDragger: FunctionComponent<IKitDragger> = ({title, description, className, ...draggerProps}) => {
    const {appId} = useKitTheme();

    const draggerTitle = title ?? 'Click or drag file to this area to upload';
    const draggerDescription =
        description ??
        'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.';

    const clx = cn(appId, styles['kit-upload-dragger'], className);

    return (
        <AntdUpload.Dragger {...draggerProps} className={clx}>
            <p className="ant-upload-drag-icon">
                <FontAwesomeIcon icon={faInbox} />
            </p>
            <p className="ant-upload-text">{draggerTitle}</p>
            <p className="ant-upload-hint">{draggerDescription}</p>
        </AntdUpload.Dragger>
    );
};

export default KitDragger;
