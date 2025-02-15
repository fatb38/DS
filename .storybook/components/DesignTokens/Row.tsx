import {Markdown} from '@storybook/blocks';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {IRow} from './types';

const StyledRow = styled.tr`
    &:not(.visible) {
        visibility: collapse;
    }

    td {
        color: #2e3438;
        font-size: 13px;
        line-height: 20px;
        background: #fff;
        padding: 5px 0;

        p {
            margin: 0;
        }

        .subtitle {
            color: rgba(46, 52, 56, 0.6);
            font-size: 0.8rem;
            font-style: italic;
        }

        code {
            /* filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)); */
            font-size: 12px;
            border: 1px solid #ecf4f9;
            border-radius: 3px;
        }
    }
`;

const StyledColor = styled.div`
    display: inline-block;
    vertical-align: middle;

    .swatch {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background: trasnparent;
        margin-right: 0.25rem;
        vertical-align: middle;
        border: 1px solid #ccc;
    }

    .value {
        font-style: italic;
        font-size: 0.7rem;
        color: #666;
        vertical-align: middle;
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

const Row: FunctionComponent<IRow> = ({level, _value, _type, _label, _description, _path, visible}) => {
    const _getFormattedValue = () => {
        switch (_type) {
            case 'color':
                return (
                    <StyledColor>
                        {_value && <span className="swatch" style={{background: _value}} />}
                        <span className="value">{_value ?? '-'}</span>
                    </StyledColor>
                );
            case 'shadow':
                return (
                    <StyledShadowBox>
                        {_value && <span className="swatch" style={{boxShadow: _value.toString()}} />}
                        <span className="value">{_value ?? '-'}</span>
                    </StyledShadowBox>
                );
            default:
                return _value;
        }
    };

    return (
        <StyledRow className={`sb-unstyled ${visible ? 'visible' : ''}`}>
            <td style={{paddingLeft: `${(3 + level) * 0.5}rem`}}>
                <div>
                    <b>{_label}</b>
                </div>
                <div className="subtitle">
                    <b>Theme Token key:</b> {_path}
                </div>
                <div className="subtitle">
                    <b>Css variable :</b> {`--${_path?.replace(/\./g, '-')}`}
                </div>
            </td>
            <td>{_description ?? '-'}</td>
            <td>
                <Markdown>{`\`${_type === 'shadow' ? 'string' : _type}\``}</Markdown>
            </td>
            <td>{_getFormattedValue()}</td>
        </StyledRow>
    );
};
Row.displayName = 'DSRow';

export default Row;
