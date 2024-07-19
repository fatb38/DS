import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {KitTooltip} from '../../../../src/Kit';
import {EditorContext} from '../Context';
import styled, {css} from 'styled-components';
import {ColorControl} from '@storybook/blocks';
import {useDebouncedCallback} from 'use-debounce';
import {getValue} from '../util';
import {IEditorContext, IField} from '../types';
import Icon from './Icon';

const StyledField = styled.div`
    padding: 0.5rem 0 0.25rem 0;
    &:last-child {
        border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);
    }
`;

export const StyledLinkButton = styled.a`
    flex: 0;
    font-size: 0.8rem;
    font-family:
        'Nunito Sans',
        -apple-system,
        '.SFNSText-Regular',
        'San Francisco',
        BlinkMacSystemFont,
        'Segoe UI',
        'Helvetica Neue',
        Helvetica,
        Arial,
        sans-serif;
    color: #1677ff;
    white-space: nowrap;
    margin-left: 0.5rem;
`;

const StyledFieldToggle = styled.div`
    display: flex;
    padding-right: 0.5rem;
    cursor: pointer;

    .label {
        flex: 1;
        font-size: 0.9rem;
    }

    .btn {
        display: none;
        font-size: 0.8rem;
        line-height: 1.3rem;
        font-family:
            'Nunito Sans',
            -apple-system,
            '.SFNSText-Regular',
            'San Francisco',
            BlinkMacSystemFont,
            'Segoe UI',
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif;
        color: #1677ff;
        white-space: nowrap;
    }

    &:hover .btn {
        display: inline;
    }
`;

const StyledInputWrapper = styled.div`
    color: rgba(0, 0, 0, 0.88);

    .label {
        margin-bottom: 4px;
        font-size: 0.9rem;

        > * {
            vertical-align: baseline;
        }

        .icon {
            font-size: 0.8rem;
            color: #1677ff;
            cursor: pointer;
        }
    }

    .helper {
        color: rgba(0, 0, 0, 0.68);
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 0.8rem;
        font-style: italic;
    }

    .component-row .input {
        display: inline-block;
    }
`;

const inputCss = css`
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    color: #2e3438;
    transition:
        box-shadow 200ms ease-out,
        opacity 200ms ease-out;
    color: #2e3438;
    box-shadow: hsla(203, 50%, 30%, 0.15) 0 0 0 1px inset;
    line-height: 20px;

    &:focus {
        border: none;
        box-shadow: #029cfd 0 0 0 1px inset;
        outline: none;
    }

    width: 100px;
`;

const StyledInputText = styled.input.attrs({
    type: 'text'
})`
    ${inputCss}
`;
const StyledInputNumber = styled.input.attrs({
    type: 'number'
})`
    ${inputCss}
`;

const ValueStyled = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-style: italic;
    font-size: 0.8rem;
    color: #666;
    vertical-align: middle;
    margin-left: 0.5rem;
`;

const StyledColor = styled.div`
    display: inline-block;
    margin-left: 0.5rem;

    .swatch {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background: trasnparent;
        margin-right: 0.25rem;
        border: 1px solid #ccc;
    }

    .value {
        font-style: italic;
        font-size: 0.8rem;
        color: #666;
    }
`;

const StyledShadowBox = styled(StyledColor)`
    .swatch {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0;
        margin-right: 0.5rem;
    }
`;

const Field: FunctionComponent<IField> = ({
    _type,
    _path,
    _min,
    _value,
    level,
    _description,
    _label,
    addResetFunction,
    onTokenChanged,
    isVisible
}) => {
    const {theme, setThemeValue} = useContext<IEditorContext>(EditorContext);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setDefaultValue] = useState(getValue(theme, _path));

    const _debouncedSetValue = useDebouncedCallback(e => {
        let value = e?.target?.value ?? e;
        if (_type === 'number') {
            value = parseInt(value, 10) || '';
        }
        setThemeValue(_path, value);
        onTokenChanged && onTokenChanged();
    }, 500);

    const _handleChangedEvent = e => {
        const value = e?.target?.value ?? e;
        setDefaultValue(value);
        _debouncedSetValue(e);
    };

    const _handleClearClick = () => {
        setThemeValue(_path, '');
        setShowInput(false);
    };

    const _getComponent = () => {
        switch (_type) {
            case 'number':
                return (
                    <StyledInputNumber min={_min} onChange={_handleChangedEvent} value={(inputValue as number) ?? ''} />
                );
            case 'color':
                return <ColorControl name={_path} onChange={_handleChangedEvent} value={inputValue as string} />;
            default:
                return (
                    <StyledInputText name={_path} onChange={_handleChangedEvent} value={(inputValue as string) ?? ''} />
                );
        }
    };

    useEffect(() => {
        if (addResetFunction) {
            addResetFunction(_path, () => {
                setDefaultValue(undefined);
                setShowInput(false);
            });
        }
    }, []);

    useEffect(() => {
        const val = getValue(theme, _path);
        setDefaultValue(val);
        if (val && val !== inputValue) {
            setShowInput(true);
        }
    }, [theme, _path]);

    const valueElement = (
        <ValueStyled className="inputValue">
            {_value && (
                <span>
                    (Default :
                    {_type === 'color' ? (
                        <StyledColor>
                            {_value && <span className="swatch" style={{background: _value}} />}
                            <span className="value">{_value ?? '-'}</span>
                        </StyledColor>
                    ) : _type === 'shadow' ? (
                        <StyledShadowBox>
                            {_value && <span className="swatch" style={{boxShadow: _value.toString()}} />}
                            <span className="value">{_value ?? '-'}</span>
                        </StyledShadowBox>
                    ) : (
                        _value
                    )}
                    )
                </span>
            )}
        </ValueStyled>
    );

    if (!isVisible) {
        return null;
    }

    return (
        <StyledField style={{paddingLeft: `${(level + 2) * 0.5}rem`}}>
            {showInput && (
                <StyledInputWrapper>
                    <div className="label">
                        {_description && (
                            <KitTooltip title={_description}>
                                <span className="icon">
                                    <Icon icon="question" />
                                </span>
                            </KitTooltip>
                        )}
                        <span>{_label}</span>
                        {valueElement}
                    </div>
                    <div className="component-row">
                        <div className="input">{_getComponent()}</div>
                        <StyledLinkButton className="clearValue" onClick={_handleClearClick}>
                            <Icon icon="undo" />
                        </StyledLinkButton>
                    </div>
                    <div className="helper">{_path}</div>
                </StyledInputWrapper>
            )}
            {!showInput && (
                <StyledFieldToggle onClick={() => setShowInput(true)}>
                    <span className="label">
                        {_label}
                        {valueElement}
                        <StyledLinkButton className="btn">
                            <Icon icon="edit" />
                        </StyledLinkButton>
                    </span>
                </StyledFieldToggle>
            )}
        </StyledField>
    );
};
Field.displayName = 'EditorField';

export default Field;
