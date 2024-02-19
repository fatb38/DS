import React, {ReactNode, forwardRef} from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {IKitRangePicker} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faClock, faCalendar} from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const KitDatePicker = forwardRef<any, IKitRangePicker>(
    ({label, className, helper, suffixIcon, picker, allowClear = true, ...rangePickerProps}, ref) => {
        const {appId} = useKitTheme();

        const _getSuffixIcon = (): ReactNode => {
            if (picker === 'time') {
                return <FontAwesomeIcon icon={faClock} />;
            }
            return <FontAwesomeIcon icon={faCalendar} />;
        };

        const _isRangePickerDisabled = (): boolean => {
            if (rangePickerProps.disabled === undefined) {
                return false;
            }

            if (typeof rangePickerProps.disabled === 'boolean') {
                return rangePickerProps.disabled;
            }

            return (rangePickerProps.disabled[0] as boolean) && (rangePickerProps.disabled[1] as boolean);
        };

        const clx = cn(appId, styles['kit-rangepicker'], className as string);

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={_isRangePickerDisabled()}
                status={rangePickerProps.status}
            >
                <div>
                    <AntdDatePicker.RangePicker
                        {...rangePickerProps}
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
