import {forwardRef, useState} from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {KitInputNumberProps} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

export const KitInputNumber = forwardRef<HTMLInputElement, KitInputNumberProps>(
    (
        {
            label,
            helper,
            htmlFor,
            wrapperClassName,
            className,
            required,
            infoIcon,
            actions,
            onInfoClick,
            ...inputNumberProps
        },
        ref
    ) => {
        const {appId} = useKitTheme();
        const [hasFocus, setHasFocus] = useState(false);

        const clx = cn(appId, styles['kit-input-number'], className, {
            'kit-input-number-affix-wrapper-focused': hasFocus
        });

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                htmlFor={htmlFor}
                disabled={inputNumberProps.disabled}
                status={inputNumberProps.status}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <AntdInputNumber
                    ref={ref}
                    id={inputNumberProps.id ?? htmlFor}
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
