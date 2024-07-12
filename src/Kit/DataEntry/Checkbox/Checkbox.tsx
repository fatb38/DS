/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
import {forwardRef, useContext, useEffect, useRef} from 'react';
import {Checkbox, CheckboxRef} from 'antd';
import {IKitCheckbox} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {GroupContext} from './Group';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitCheckbox = forwardRef<CheckboxRef, IKitCheckbox>(({danger, className, ...props}, ref) => {
    const checkboxGroup = useContext(GroupContext);
    const {appId} = useKitTheme();
    const mergedDisabled = checkboxGroup?.disabled || props.disabled;
    const prevValue = useRef(props.value);

    useEffect(() => {
        checkboxGroup?.registerValue(props.value);
    }, []);

    useEffect(() => {
        if (props.skipGroup) {
            return;
        }
        if (props.value !== prevValue.current) {
            checkboxGroup?.cancelValue(prevValue.current);
            checkboxGroup?.registerValue(props.value);
            prevValue.current = props.value;
        }
        return () => checkboxGroup?.cancelValue(props.value);
    }, [props.value]);

    const checkboxProps = {...props};
    if (checkboxGroup && !props.skipGroup) {
        checkboxProps.onChange = (...args) => {
            if (props.onChange) {
                props.onChange(...args);
            }
            if (checkboxGroup.toggleOption) {
                checkboxGroup.toggleOption({label: props.children, value: props.value});
            }
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.includes(props.value);
    }

    const clx = cn(appId, styles['kit-checkbox'], className, {
        ['ant-checkbox-wrapper-danger']: danger
    });

    return <Checkbox {...checkboxProps} ref={ref} disabled={mergedDisabled} className={clx} />;
});

export default KitCheckbox;
