import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {Select} from 'antd';
import type {CustomTagProps} from 'rc-select/lib/BaseSelect';
import {KitSelectStyle, StyledLabel} from '@kit/DataEntry/Select/style';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {KitIcon} from '../../General/';
import Tag from './Tag';
import {tagTheme} from './theme';
import theme from '@theme/index';
import {KitTagInputProps} from './types';

const tagRender = (props: CustomTagProps) => {
    const {label, onClose} = props;
    return (
        <Tag closable onClose={onClose}>
            {label}
        </Tag>
    );
};

const fixedProps = {
    mode: 'tags',
    tagRender: tagRender
};

const DropDownRenderer = menu => <div className="kit-select-dropdown-content">{menu}</div>;

const TagInputBase = styled(Select)`
    ${KitSelectStyle}
    & .ant-select-selector {
        padding: 8px 25px 8px 10px;
    }

    & .ant-select-clear {
        opacity: 1;
        font-size: 10px;
        top: calc(50% + 3px);
        color: ${theme.color.neutral.typography.black};
    }

    & .ant-select-selection-placeholder {
        color: ${tagTheme.placeholderColor};
        font-size: ${tagTheme.placeholderFontSize};
        font-weight: ${tagTheme.placeholderFontWeight};
    }

    & .ant-select-selection-search {
        min-width: 50px;
    }
`;

const KitTagInput = ({onChange, ...props}: KitTagInputProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>(props.value || []);
    const [filteredOptions, setFiltereOptions] = useState<string[]>([]);

    useEffect(() => {
        const filtered: string[] = (props.options || []).filter(v => selectedItems.indexOf(v) === -1);
        setFiltereOptions([...filtered, ...selectedItems]);
    }, [props.options, selectedItems]);

    const onInternalChange = values => {
        setSelectedItems(values);
        onChange && onChange(values);
    };
    // @ts-ignore
    let SelectionIcon = <KitIcon icon={<CheckOutlined />} on />;

    let inputProps: any = {
        ...props,
        showArrow: false,
        allowClear: true,
        clearIcon: <CloseOutlined />,
        popupMatchSelectWidth: false,
        defaultActiveFirstOption: false,
        tokenSeparators: props.tokenSeparator || [','],
        menuItemSelectedIcon: SelectionIcon,
        onChange: onInternalChange,
        style: {minWidth: '100px'},
        dropdownRender: DropDownRenderer,
        popupClassName:
            'ari-select-dropdown-' + (props.placement && props.placement.indexOf('top') >= 0 ? 'top' : 'bottom'),
        className:
            (props.className || '') +
            ' ant-select-' +
            (props.placement && props.placement.indexOf('top') >= 0 ? 'top' : 'bottom')
    };

    const onSearch = (value:string) => {
        props.onSearch && props.onSearch(value, selectedItems);
    };

    if (props.onSearch) {
        inputProps = {
            ...inputProps,
            showSearch: true,
            filterOption: false,
            notFoundContent: props.notFoundContent || null,
            onSearch
        };
    }

    return (
        <TagInputBase
            {...inputProps}
            {...fixedProps}
            value={selectedItems}
            getInputElement={() => {console.log('tutu'); return <input placeholder="blahh"/>}}
            options={filteredOptions.map(item => ({
                value: item,
                label: <StyledLabel>{item}</StyledLabel>
            }))}
        />
    );
};

export default KitTagInput;
