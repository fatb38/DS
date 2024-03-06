import cn from 'classnames';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import React, {forwardRef, memo, useContext} from 'react';
import {ConfigContext} from 'antd/es/config-provider/';
import SizeContext from 'antd/es/config-provider/SizeContext';
import pickAttrs from 'rc-util/es/pickAttrs';
import {RadioGroupContextProvider} from './context';
import type {RadioChangeEvent, RadioGroupButtonStyle} from 'antd/es/radio/interface';
import Radio from './Radio';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {KitRadioGroup} from './types';

import useStyle from 'antd/es/radio/style';

const RadioGroup = memo(
    forwardRef<HTMLDivElement, KitRadioGroup>((props, ref) => {
        const {getPrefixCls, direction} = useContext(ConfigContext);
        const size = useContext(SizeContext);

        const [value, setValue] = useMergedState<unknown>(props.defaultValue, {
            value: props.value
        });

        const _onRadioChange = (event: RadioChangeEvent) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const val = event.target.value;
            if (!('value' in props)) {
                setValue(val);
            }
            const {onChange} = props;
            if (onChange && val !== value) {
                onChange(event);
            }
        };

        const {
            prefixCls: customizePrefixCls,
            className,
            rootClassName,
            label,
            helper,
            status,
            wrapperClassName,
            bordered,
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
            onBlur,
            required,
            infoIcon,
            actions,
            onInfoClick
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
        const clx = cn(
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
                className={clx}
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
                        onChange: _onRadioChange,
                        value,
                        disabled: props.disabled,
                        name: props.name
                    }}
                >
                    <KitInputWrapper
                        label={label}
                        helper={helper}
                        disabled={disabled}
                        bordered={bordered}
                        status={status}
                        className={wrapperClassName}
                        required={required}
                        infoIcon={infoIcon}
                        actions={actions}
                        onInfoClick={onInfoClick}
                    >
                        {childrenToRender}
                    </KitInputWrapper>
                </RadioGroupContextProvider>
            </div>
        );
    })
);

export default RadioGroup;
