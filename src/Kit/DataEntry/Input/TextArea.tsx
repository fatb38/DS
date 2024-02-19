import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitTextArea} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitTextArea = forwardRef<InputRef, IKitTextArea>(
    ({label, className, helper, wrapperClassName, allowClear = true, ...textAreaProps}, ref) => {
        const {appId} = useKitTheme();
        const clx = cn(appId, styles['kit-textarea'], className);

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={textAreaProps.disabled}
                status={textAreaProps.status}
                className={wrapperClassName}
            >
                <AntdInput.TextArea
                    {...textAreaProps}
                    ref={ref}
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                    className={clx}
                />
            </KitInputWrapper>
        );
    }
);

export default KitTextArea;
