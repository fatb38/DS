import {FunctionComponent} from 'react';
import {Image as AntdImage} from 'antd';
import cn from 'classnames';
import {IKitImage, KitImageCompoundedComponent} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {useKitLocale} from '@translation/useKitLocale';
import {useKitTheme} from '@theme/useKitTheme';

import styles from './styles.module.scss';

const Image: FunctionComponent<IKitImage> = ({rounded, bordered, preview, className, ...props}) => {
    const {locale} = useKitLocale();
    const {appId} = useKitTheme();

    const Mask = (
        <div className={styles['mask-container']}>
            <FontAwesomeIcon icon={faEye} />
            {locale.Image?.preview}
        </div>
    );

    const _getPreview = () => {
        if (typeof preview === 'object') {
            return {mask: Mask, ...preview};
        }
        if (preview === undefined) {
            return {mask: Mask};
        }
        return preview;
    };

    const clx = cn(appId, styles['kit-image'], className ?? '', {
        rounded,
        bordered
    });

    return <AntdImage className={clx} preview={_getPreview()} {...props} />;
};

export const KitImage = Image as KitImageCompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = 'KitImage';
