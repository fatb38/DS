import {faCalendar, faCircleXmark, faClock} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {DatePicker as AntdDatePicker} from 'antd';
import cn from 'classnames';
import React, {ReactNode, forwardRef} from 'react';
import {IKitDatePicker} from './types';

import {IKitInputWrapper} from '../InputWrapper/types';
import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const KitDatePicker = forwardRef<any, IKitDatePicker>(
    (
        {
            label,
            helper,
            suffixIcon,
            className,
            wrapperClassName,
            picker = 'date',
            allowClear = true,
            required,
            infoIcon,
            actions,
            onInfoClick,
            ...datePickerProps
        },
        ref
    ) => {
        const {appId} = useKitTheme();

        const _getSuffixIcon = (): ReactNode => {
            if (picker === 'time') {
                return <FontAwesomeIcon icon={faClock} />;
            }
            return <FontAwesomeIcon icon={faCalendar} />;
        };

        const clx = cn(appId, styles['kit-datepicker'], className as string);

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={datePickerProps.disabled as boolean}
                status={datePickerProps.status as IKitInputWrapper['status']}
                className={wrapperClassName}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <div>
                    <AntdDatePicker
                        {...datePickerProps}
                        picker={picker}
                        ref={ref}
                        suffixIcon={suffixIcon ?? _getSuffixIcon()}
                        allowClear={
                            allowClear
                                ? {clearIcon: <FontAwesomeIcon aria-label="clear" icon={faCircleXmark} />}
                                : false
                        }
                        className={clx}
                    />
                </div>
            </KitInputWrapper>
        );
    }
);

export default KitDatePicker;
