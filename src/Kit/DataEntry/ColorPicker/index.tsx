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
    required,
    infoIcon,
    actions,
    onInfoClick,
    ...colorPickerProps
}) => {
    const {appId} = useKitTheme();

    const rootClx = cn(appId, 'kit-colorpicker-panel', rootClassName);
    const clx = cn(appId, styles['kit-colorpicker'], className);

    return (
        <KitInputWrapper
            label={label}
            helper={helper}
            disabled={colorPickerProps.disabled}
            required={required}
            infoIcon={infoIcon}
            actions={actions}
            onInfoClick={onInfoClick}
        >
            <AntdColorPicker {...colorPickerProps} rootClassName={rootClx} className={clx} />
        </KitInputWrapper>
    );
};

KitColorPicker.displayName = 'KitColorPicker';
