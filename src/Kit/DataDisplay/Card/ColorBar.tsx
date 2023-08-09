import React from 'react';
import {KitColorbarProps, cardColor} from './types';
import styled from 'styled-components';
import {colorbarTheme} from './theme';
import {KitTooltip} from '../Tooltip';

type ContainerProps = {
    $column: boolean;
};

const Container = styled.div<ContainerProps>`
    width: ${props => (props.$column ? `${colorbarTheme.barWidth}px` : 'auto')};
    height: ${props => (props.$column ? 'auto' : `${colorbarTheme.barWidth}px`)};
    border-radius: ${colorbarTheme.borderRadius}px;
    display: flex;
    flex-direction: ${props => (props.$column ? 'column' : 'row')};
    overflow: hidden;

    > div {
        flex: 1 1 auto;
    }
`;

const getSwatchStyle = (item: cardColor) => {
    return {
        background: item.color || 'transparent'
    };
};

const KitColorbar = (props: KitColorbarProps) => (
    <Container $column={props.vertical ?? false} className={props.className}>
        {(props.colors || []).map((item, i) => (
            <KitTooltip
                key={`${item.label}_${i}`}
                title={item.label}
                placement={props.vertical ?? false ? 'right' : 'top'}
            >
                <div style={getSwatchStyle(item)} />
            </KitTooltip>
        ))}
    </Container>
);

export default KitColorbar;
