import React, {forwardRef, useState} from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {KitInputNumberProps} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitInputNumber = forwardRef<HTMLInputElement, KitInputNumberProps>(
    ({label, helper, wrapperClassName, className, ...inputNumberProps}, ref) => {
        const {appId} = useKitTheme();
        const [hasFocus, setHasFocus] = useState(false);

        const clx = cn(appId, styles['kit-input-number'], className, {
            'kit-input-number-affix-wrapper-focused': hasFocus
        });

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={inputNumberProps.disabled}
                status={inputNumberProps.status}
                className={wrapperClassName}
            >
                <AntdInputNumber
                    ref={ref}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    className={clx}
                    {...inputNumberProps}
                />
            </KitInputWrapper>
        );
    }
);

KitInputNumber.displayName = 'KitInputNumber';
