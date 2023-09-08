import React from 'react';
import {KitColorbarProps, cardColor} from './types';
import styled from 'styled-components';
import {KitTooltip} from '../Tooltip';
import {useKitTheme} from '@theme/theme-context';
import {KitCardTheme} from '@theme/types/components/DataDisplay/Card';

const Container = styled.div<{
    $theme: KitCardTheme;
    $column: boolean;
}>`
    width: ${({$column, $theme}) => ($column ? `${$theme.colorBar.thickness}px` : 'auto')};
    height: ${({$column, $theme}) => ($column ? 'auto' : `${$theme.colorBar.thickness}px`)};
    border-radius: ${({$theme}) => $theme.colorBar.border.radius}px;
    display: flex;
    flex-direction: ${({$column}) => ($column ? 'column' : 'row')};
    overflow: hidden;

    > div {
        flex: 1 1 auto;
    }
`;

const getSwatchStyle = (item: cardColor) => {
    return {
        background: item.color ?? 'transparent'
    };
};

const KitColorbar = (props: KitColorbarProps) => {
    const {theme} = useKitTheme();
    return (
        <Container $theme={theme.components.Card} $column={props.vertical ?? false} className={props.className}>
            {props.colors?.map((item, i) => (
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
};

export default KitColorbar;
