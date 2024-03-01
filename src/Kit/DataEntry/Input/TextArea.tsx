import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitTextArea} from './types';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitTextArea = forwardRef<InputRef, IKitTextArea>(
    (
        {
            label,
            className,
            helper,
            wrapperClassName,
            allowClear = true,
            required,
            infoIcon,
            actions,
            onInfoClick,

            ...textAreaProps
        },
        ref
    ) => {
        const {appId} = useKitTheme();
        const clx = cn(appId, styles['kit-textarea'], className);

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={textAreaProps.disabled}
                status={textAreaProps.status}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <AntdInput.TextArea
                    {...textAreaProps}
                    ref={ref}
                    allowClear={
                        allowClear
                            ? {clearIcon: <FontAwesomeIcon aria-label="clear" icon={faCircleXmark} />}
                            : undefined
                    }
                    className={clx}
                />
            </KitInputWrapper>
        );
    }
);

export default KitTextArea;
