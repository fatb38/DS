import {forwardRef, useContext} from 'react';
import {Radio, RadioChangeEvent, RadioProps} from 'antd';
import {KitRadioProps} from './types';
import RadioGroupContext from './context';
import {useKitTheme} from '@theme/useKitTheme';
import {RadioRef} from 'antd/es/radio';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitRadio = forwardRef<RadioRef, KitRadioProps>((props, ref) => {
    const groupContext = useContext(RadioGroupContext);
    const {appId} = useKitTheme();
    const {className, danger, ...rest} = props;

    const _onChange = (e: RadioChangeEvent) => {
        props.onChange?.(e);
        groupContext?.onChange?.(e);
    };

    const radioProps: RadioProps = {...rest};
    if (groupContext) {
        radioProps.name = groupContext.name;
        radioProps.onChange = _onChange;
        radioProps.checked = props.value === groupContext.value;
        radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
    }

    const clx = cn(appId, styles['kit-radio'], className, {
        ['ant-radio-wrapper-danger']: danger
    });

    return <Radio ref={ref} className={clx} {...radioProps} />;
});

export default KitRadio;
