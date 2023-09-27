import classNames from 'classnames';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import React, {useContext} from 'react';
import {ConfigContext} from 'antd/lib/config-provider/';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import pickAttrs from 'rc-util/lib/pickAttrs';
import {RadioGroupContextProvider} from './context';
import type {RadioChangeEvent, RadioGroupButtonStyle, RadioGroupProps} from 'antd/lib/radio/interface';
import Radio from './Radio';

import useStyle from 'antd/lib/radio/style';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
    const {getPrefixCls, direction} = useContext(ConfigContext);
    const size = useContext(SizeContext);

    const [value, setValue] = useMergedState(props.defaultValue, {
        value: props.value
    });

    const onRadioChange = (ev: RadioChangeEvent) => {
        const lastValue = value;
        const val = ev.target.value;
        if (!('value' in props)) {
            setValue(val);
        }
        const {onChange} = props;
        if (onChange && val !== lastValue) {
            onChange(ev);
        }
    };

    const {
        prefixCls: customizePrefixCls,
        className,
        rootClassName,
        options,
        buttonStyle = 'outline' as RadioGroupButtonStyle,
        disabled,
        children,
        size: customizeSize,
        style,
        id,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur
    } = props;
    const prefixCls = getPrefixCls('radio', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;

    // Style
    const [wrapSSR, hashId] = useStyle(prefixCls);

    let childrenToRender = children;
    if (options && options.length > 0) {
        childrenToRender = options.map(option => {
            if (typeof option === 'string' || typeof option === 'number') {
                return (
                    <Radio
                        key={option.toString()}
                        prefixCls={prefixCls}
                        disabled={disabled}
                        value={option}
                        checked={value === option}
                    >
                        {option}
                    </Radio>
                );
            }
            return (
                <Radio
                    key={`radio-group-value-options-${option.value}`}
                    prefixCls={prefixCls}
                    disabled={option.disabled || disabled}
                    value={option.value}
                    checked={value === option.value}
                    style={option.style}
                >
                    {option.label}
                </Radio>
            );
        });
    }

    const mergedSize = customizeSize || size;
    const classString = classNames(
        groupPrefixCls,
        `${groupPrefixCls}-${buttonStyle}`,
        {
            [`${groupPrefixCls}-${mergedSize}`]: mergedSize,
            [`${groupPrefixCls}-rtl`]: direction === 'rtl'
        },
        className,
        rootClassName,
        hashId
    );
    return wrapSSR(
        <div
            // {...getDataOrAriaProps(props)}
            {...pickAttrs(props, {
                aria: true,
                data: true
            })}
            className={classString}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            id={id}
            ref={ref}
        >
            <RadioGroupContextProvider
                value={{
                    onChange: onRadioChange,
                    value,
                    disabled: props.disabled,
                    name: props.name
                }}
            >
                {childrenToRender}
            </RadioGroupContextProvider>
        </div>
    );
});

export default React.memo(RadioGroup);
