import React, {FunctionComponent} from 'react';
import {KitColorPickerProps} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {ColorPicker as AntdColorPicker} from 'antd';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitColorPicker: FunctionComponent<KitColorPickerProps> = ({
    label,
    className,
    helper,
    rootClassName,
    ...colorPickerProps
}) => {
    const {appId} = useKitTheme();

    const rootClx = cn(appId, styles['kit-colorpicker'], rootClassName);
    const clx = cn(appId, className);

    return (
        <KitInputWrapper label={label} helper={helper} disabled={colorPickerProps.disabled}>
            <AntdColorPicker {...colorPickerProps} rootClassName={rootClx} className={clx} />
        </KitInputWrapper>
    );
};

KitColorPicker.displayName = 'KitColorPicker';
