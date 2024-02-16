import React, {ReactNode, forwardRef} from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {IKitDatePicker} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';
import {IKitInputWrapper} from '../InputWrapper/types';

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
            >
                <div>
                    <AntdDatePicker
                        {...datePickerProps}
                        picker={picker}
                        ref={ref}
                        suffixIcon={(suffixIcon as ReactNode) ?? _getSuffixIcon()}
                        allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : false}
                        className={clx}
                    />
                </div>
            </KitInputWrapper>
        );
    }
);

export default KitDatePicker;
