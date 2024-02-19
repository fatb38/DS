import React, {forwardRef} from 'react';
import {KitButton} from '@kit/General';
import cn from 'classnames';
import {Upload as AntdUpload} from 'antd';
import {IKitUpload} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch, faPlus, faUpload} from '@fortawesome/free-solid-svg-icons';
import {UploadRef} from 'antd/lib/upload/Upload';

import styles from './styles.module.scss';

const KitUpload = forwardRef<UploadRef, IKitUpload>(
    ({listType = 'text', loading, imageUrl, buttonWording, showUploadList, className, ...uploadProps}, ref) => {
        const {appId} = useKitTheme();
        const uploadWording = buttonWording ?? 'Upload';

        const clx = cn(appId, styles['kit-upload'], className, {
            'list-type-text': listType === 'text' || listType === undefined
        });

        return (
            <AntdUpload {...uploadProps} listType={listType} showUploadList={showUploadList} ref={ref} className={clx}>
                {(listType === undefined || listType === 'text' || listType === 'picture') && (
                    <KitButton icon={<FontAwesomeIcon icon={faUpload} />}>{uploadWording}</KitButton>
                )}
                {showUploadList && listType === 'picture-card' && (
                    <div>
                        <FontAwesomeIcon icon={faPlus} />
                        <div style={{marginLeft: 4}}>{uploadWording}</div>
                    </div>
                )}
                {!showUploadList &&
                    listType === 'picture-card' &&
                    (imageUrl ? (
                        <div style={{width: '100%', padding: '8px'}}>
                            <img src={imageUrl} alt="avatar" style={{width: '100%'}} />
                        </div>
                    ) : (
                        <>
                            {loading ? (
                                <FontAwesomeIcon icon={faCircleNotch} spin />
                            ) : (
                                <FontAwesomeIcon icon={faPlus} />
                            )}
                            <div style={{marginLeft: 4}}>{uploadWording}</div>
                        </>
                    ))}
            </AntdUpload>
        );
    }
);

KitUpload.displayName = 'KitUpload';

export default KitUpload;
