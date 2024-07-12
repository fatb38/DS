import {Slider as AntdSlider} from 'antd';
import cn from 'classnames';
import {forwardRef} from 'react';
import {IKitSliderRange, IKitSliderSingle} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import type {SliderRef} from 'rc-slider/es/Slider';

import styles from './styles.module.scss';

export const KitSlider = forwardRef<SliderRef, IKitSliderSingle | IKitSliderRange>(
    ({startIcon, endIcon, marks, className, ...props}, ref) => {
        const {appId} = useKitTheme();

        const clx = cn(appId, styles['kit-slider'], className, {
            'with-start-icon': !!startIcon,
            'with-end-icon': !!endIcon
        });

        if (startIcon !== undefined || endIcon !== undefined) {
            return (
                <div className={styles['kit-slider-container']}>
                    <div className="start-icon">{startIcon}</div>
                    <AntdSlider {...props} marks={marks} ref={ref} className={clx} />
                    <div className="end-icon">{endIcon}</div>
                </div>
            );
        }

        return <AntdSlider {...props} marks={marks} ref={ref} className={clx} />;
    }
);
