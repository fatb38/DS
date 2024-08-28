import {ForwardRefRenderFunction, createContext, forwardRef, memo, useContext, useEffect, useState} from 'react';
import cn from 'classnames';
import omit from 'rc-util/es/omit';
import {ConfigContext} from 'antd/es/config-provider/';
import Checkbox from './Checkbox';
import useStyle from 'antd/es/checkbox/style';
import {ICheckboxGroupContext, ICheckboxGroup, CheckboxOptionType, CheckboxValueType} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';

export const GroupContext = createContext<ICheckboxGroupContext | null>(null);

export const InternalCheckboxGroup: ForwardRefRenderFunction<HTMLDivElement, ICheckboxGroup> = (
    {
        defaultValue,
        children,
        options = [],
        prefixCls: customizePrefixCls,
        className,
        wrapperClassName,
        status,
        rootClassName,
        style,
        onChange,
        label,
        helper,
        required,
        infoIcon,
        actions,
        onInfoClick,
        ...restProps
    },
    ref
) => {
    const {getPrefixCls, direction} = useContext(ConfigContext);

    const [value, setValue] = useState<CheckboxValueType[]>(restProps.value || defaultValue || []);
    const [registeredValues, setRegisteredValues] = useState<CheckboxValueType[]>([]);

    useEffect(() => {
        if ('value' in restProps) {
            setValue(restProps.value || []);
        }
    }, [restProps]);

    const _getOptions = () =>
        options.map(option => {
            if (typeof option === 'string' || typeof option === 'number') {
                return {
                    label: option,
                    value: option
                };
            }
            return option;
        });

    const cancelValue = (val: string) => {
        setRegisteredValues(prevValues => prevValues.filter(v => v !== val));
    };

    const registerValue = (val: string) => {
        setRegisteredValues(prevValues => [...prevValues, val]);
    };

    const toggleOption = (option: CheckboxOptionType) => {
        const optionIndex = value.indexOf(option.value);
        const newValue = [...value];
        if (optionIndex === -1) {
            newValue.push(option.value);
        } else {
            newValue.splice(optionIndex, 1);
        }
        if (!('value' in restProps)) {
            setValue(newValue);
        }
        const opts = _getOptions();
        onChange?.(
            newValue
                .filter(val => registeredValues.includes(val))
                .sort((a, b) => {
                    const indexA = opts.findIndex(opt => opt.value === a);
                    const indexB = opts.findIndex(opt => opt.value === b);
                    return indexA - indexB;
                })
        );
    };

    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;

    const [wrapSSR, hashId] = useStyle(prefixCls);

    const domProps = omit(restProps, ['value', 'disabled', 'bordered']);

    if (options && options.length > 0) {
        children = _getOptions().map(option => (
            <Checkbox
                prefixCls={prefixCls}
                key={option.value.toString()}
                danger={'danger' in option ? option.danger : restProps.danger}
                disabled={'disabled' in option ? option.disabled : restProps.disabled}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={option.onChange}
                className={`${groupPrefixCls}-item`}
                style={option.style}
            >
                {option.label}
            </Checkbox>
        ));
    }

    const context = {
        toggleOption,
        value,
        disabled: restProps.disabled,
        name: restProps.name,
        // https://github.com/ant-design/ant-design/issues/16376
        registerValue,
        cancelValue
    };
    const classString = cn(
        groupPrefixCls,
        {
            [`${groupPrefixCls}-rtl`]: direction === 'rtl'
        },
        className,
        rootClassName,
        hashId
    );
    return wrapSSR(
        <div className={classString} style={style} {...domProps} ref={ref}>
            <GroupContext.Provider value={context}>
                <KitInputWrapper
                    label={label}
                    helper={helper}
                    disabled={restProps.disabled}
                    bordered={restProps.bordered}
                    status={status}
                    className={wrapperClassName}
                    required={required}
                    infoIcon={infoIcon}
                    actions={actions}
                    onInfoClick={onInfoClick}
                >
                    {children}
                </KitInputWrapper>
            </GroupContext.Provider>
        </div>
    );
};

const CheckboxGroup = memo(forwardRef<HTMLDivElement, ICheckboxGroup>(InternalCheckboxGroup));

export default CheckboxGroup;
