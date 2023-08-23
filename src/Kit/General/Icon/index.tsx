import React from 'react';
import {css, styled} from 'styled-components';

import {iconTheme} from './theme';
import {KitIconProps} from './types';

interface StyledKitIconProps extends Omit<KitIconProps, 'icon'> {
    $on?: boolean;
    $hoverable?: boolean;
    $isClickable?: boolean;
    className?: string;
}

const StyledKitIcon = styled.span<StyledKitIconProps>`
    color: ${props => (props.$on ? iconTheme.color.on : props.color || iconTheme.color.default)};
    border-radius: ${props => (props.$on ? iconTheme.borderRadius.on : iconTheme.borderRadius.default)}px;
    background-color: ${props => (props.$on ? iconTheme.backgroundColor.on : iconTheme.backgroundColor.default)};
    padding: ${iconTheme.padding};

    ${props =>
        props.$isClickable &&
        css`
            cursor: pointer;
        `}

    &:hover {
        color: ${props => (props.$hoverable || props.$on ? iconTheme.color.on : iconTheme.color.default)};
        border-radius: ${props =>
            props.$hoverable || props.$on ? iconTheme.borderRadius.on : iconTheme.borderRadius.default}px;
        background-color: ${props =>
            props.$hoverable || props.$on ? iconTheme.backgroundColor.on : iconTheme.backgroundColor.default};
    }
`;

export const KitIcon: React.FunctionComponent<KitIconProps> = ({className, on, hoverable, icon, onClick, ...props}) => {
    // @ts-ignore
    return (
        <StyledKitIcon
            className={'kit-icon ' + className}
            $on={on}
            $hoverable={hoverable}
            $isClickable={onClick !== undefined}
            {...props}
        >
            {icon}
        </StyledKitIcon>
    );
};

KitIcon.displayName = 'KitIcon';
