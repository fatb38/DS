import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitTextArea} from './types';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

import styles from './styles.module.scss';
import {KitTypography} from '@kit/General';

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
            readonly,
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
                {readonly ? (
                    <KitTypography.Text
                        weight="bold"
                        size="large"
                        style={{color: textAreaProps.status === 'error' ? '#EB0D18' : undefined}} // TODO add ds variable for red color
                    >
                        {(textAreaProps.value as string) ?? textAreaProps.placeholder}
                    </KitTypography.Text>
                ) : (
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
                )}
            </KitInputWrapper>
        );
    }
);

export default KitTextArea;
