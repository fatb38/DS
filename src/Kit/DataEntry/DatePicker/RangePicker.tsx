import {faCalendar, faCircleXmark, faClock} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {DatePicker as AntdDatePicker} from 'antd';
import cn from 'classnames';
import React, {ReactNode, forwardRef} from 'react';
import {IKitRangePicker} from './types';

import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const KitRangePicker = forwardRef<any, IKitRangePicker>(
    (
        {
            label,
            className,
            helper,
            suffixIcon,
            picker,
            allowClear = true,
            required,
            infoIcon,
            actions,
            onInfoClick,
            readonly,
            ...rangePickerProps
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

        const _isRangePickerDisabled = (): boolean => {
            if (rangePickerProps.disabled === undefined) {
                return false;
            }

            if (typeof rangePickerProps.disabled === 'boolean') {
                return rangePickerProps.disabled;
            }

            return (rangePickerProps.disabled[0] as boolean) && (rangePickerProps.disabled[1] as boolean);
        };

        const clx = cn(appId, styles['kit-rangepicker'], className as string, readonly ? 'kit-picker-readonly' : '');

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={_isRangePickerDisabled()}
                status={rangePickerProps.status}
                required={required}
                infoIcon={infoIcon}
                actions={actions}
                onInfoClick={onInfoClick}
            >
                <div>
                    <AntdDatePicker.RangePicker
                        {...rangePickerProps}
                        picker={picker}
                        ref={ref}
                        disabled={readonly ?? _isRangePickerDisabled()}
                        variant={readonly ? 'borderless' : undefined}
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

export default KitRangePicker;
