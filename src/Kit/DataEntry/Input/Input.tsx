import {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import {IKitInput} from './types';

import styles from './styles.module.scss';
import {KitTypography} from '@kit/General';

const KitInput = forwardRef<InputRef, IKitInput>(
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
            readonly = false,
            ...inputProps
        },
        ref
    ) => {
        const {appId} = useKitTheme();
        const clx = cn(appId, styles['kit-input'], className);

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={inputProps.disabled}
                status={inputProps.status}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                {readonly ? (
                    <KitTypography.Text
                        weight="bold"
                        size="fontSize5"
                        color={inputProps.status === 'error' ? 'error' : undefined}
                    >
                        {(inputProps.value as string) ?? inputProps.placeholder}
                    </KitTypography.Text>
                ) : (
                    <AntdInput
                        {...inputProps}
                        required={required}
                        ref={ref}
                        className={clx}
                        allowClear={
                            allowClear
                                ? {clearIcon: <FontAwesomeIcon aria-label="clear" icon={faCircleXmark} />}
                                : undefined
                        }
                    />
                )}
            </KitInputWrapper>
        );
    }
);

export default KitInput;
