import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitInput} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitInput = forwardRef<InputRef, IKitInput>(
    ({label, className, helper, wrapperClassName, allowClear = true, ...inputProps}, ref) => {
        const {appId} = useKitTheme();
        const clx = cn(appId, styles['kit-input'], className);

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={inputProps.disabled}
                status={inputProps.status}
                className={wrapperClassName}
            >
                <AntdInput
                    {...inputProps}
                    ref={ref}
                    className={clx}
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                />
            </KitInputWrapper>
        );
    }
);

export default KitInput;
