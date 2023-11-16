import React, {FunctionComponent, cloneElement, useState} from 'react';
import styled from 'styled-components';
import {Icons} from '@storybook/components';
import {ISection} from './types';
import toArray from 'rc-util/lib/Children/toArray';

const StyledSectionRow = styled.tr`
    border-spacing: 0;
    cursor: pointer;

    td {
        text-transform: uppercase;
        font-weight: 700;
        background: #f6f9fc !important;
        font-size: 11px;
        color: rgba(46, 52, 56, 0.6);
        line-height: 20px;
        padding: 5px 0;
    }

    &:not(.visible) {
        visibility: collapse;
    }
`;

const StyledIcon = styled(Icons)`
    margin-right: 8px;
    margin-left: 0px;
    margin-top: -2px;
    height: 12px;
    width: 12px;
    border: 'none';
    display: 'inline-block';
`;

const SectionRow: FunctionComponent<ISection> = ({title, level, children, visible}) => {
    const [expanded, setExpanded] = useState(false);
    const icon = expanded ? 'arrowdown' : 'arrowright';

    const _children = toArray(children).map(child => {
        return cloneElement(child, {
            visible: visible && expanded
        });
    });

    return (
        <>
            <StyledSectionRow
                className={`sb-unstyled ${visible ? 'visible' : ''}`}
                onClick={() => setExpanded(!expanded)}
            >
                <td colSpan={4} style={{paddingLeft: `${level * 0.75}rem`}}>
                    <StyledIcon icon={icon} />
                    {title}
                </td>
            </StyledSectionRow>
            {_children}
        </>
    );
};
SectionRow.displayName = 'DSSEctionRow';

export default SectionRow;
