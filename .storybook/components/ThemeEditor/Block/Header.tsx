import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {IHeader} from '../types';
import Icon from './Icon';
import {StyledLinkButton} from './Field';

export const StyledHeader = styled.div`
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
    font-size: 11px;
    color: rgba(46, 52, 56, 0.6);
    padding: 5px 12px;
    border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);
    background: #f6f9fc;
    display: flex;
    align-items: center;

    .title {
        font-weight: 700;
        text-transform: uppercase;
        flex: 1;
        cursor: pointer;

        .anticon {
            margin-right: 1rem;
        }
    }

    ${StyledLinkButton} {
        text-transform: capitalize;
        font-weight: normal;
        font-size: 11px;

        &:first-of-type {
            margin-left: 2rem;
        }
    }

    &:not(:hover) ${StyledLinkButton} {
        display: none;
    }

    .reset {
        flex: 0;
        white-space: nowrap;
        color: #1677ff;
        font-size: 0.8rem;
        align-self: center;
        text-transform: capitalize;
        font-weight: normal;
    }
`;

const Header: FunctionComponent<IHeader> = ({
    title,
    level,
    onReset,
    resetText,
    onClick,
    collapsible,
    collapsed,
    onCollapseAll,
    onExpandAll
}) => {
    const _handleClickReset = e => onReset && onReset(e);
    const _handleOnClick = e => onClick && onClick(e);
    const _handleExpandAll = e => {
        e.stopPropagation();
        collapsible && collapsed && _handleOnClick(e);
        onExpandAll && onExpandAll(e);
    };
    const _handleCollapseAll = e => {
        e.stopPropagation();
        collapsible && !collapsed && _handleOnClick(e);
        onCollapseAll && onCollapseAll(e);
    };
    const icon = collapsed ? 'arrowright' : 'arrowdown';

    return (
        <StyledHeader
            className={collapsible && !collapsed ? 'open' : ''}
            style={{paddingLeft: `calc(${(level ?? 0) * 5}px + 12px)`}}
        >
            <div
                className={`title ${collapsible ? 'collapsible' : ''}`}
                style={{paddingLeft: `${(level || 0) * 0.5}rem`}}
                onClick={_handleOnClick}
            >
                {collapsible && <Icon icon={icon} />}
                {title}
                {onExpandAll && <StyledLinkButton onClick={_handleExpandAll}>Expand all</StyledLinkButton>}
                {onCollapseAll && <StyledLinkButton onClick={_handleCollapseAll}>Collapse all</StyledLinkButton>}
            </div>
            {resetText && (
                <div className="reset">
                    <a type="link" onClick={_handleClickReset}>
                        {resetText}
                    </a>
                </div>
            )}
        </StyledHeader>
    );
};

export default Header;
