import React from 'react';
import {IKitColorbar, CardColor, IStyledKitColorbar} from './types';
import styled from 'styled-components';
import {KitTooltip} from '../Tooltip';
import {useKitTheme} from '@theme/useKitTheme';
import {kitItemCardCssTokens} from '@theme/aristid/components/DataDisplay/ItemCard';
import {borderCssTokens} from '@theme/aristid/general/border';

const Container = styled.div<IStyledKitColorbar>`
    width: ${({$column}) =>
        $column
            ? `calc(var(
                ${kitItemCardCssTokens.colorBar.thickness},
                8
            )* 1px)`
            : 'auto'};
    height: ${({$column}) =>
        $column
            ? 'auto'
            : `calc(var(
                ${kitItemCardCssTokens.colorBar.thickness},
                8
            )* 1px)`};
    border-radius: calc(var(${kitItemCardCssTokens.colorBar.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
    display: flex;
    flex-direction: ${({$column}) => ($column ? 'column' : 'row')};
    overflow: hidden;

    > div {
        flex: 1 1 auto;
    }
`;

const _getSwatchStyle = (item: CardColor) => {
    return {
        background: item.color ?? 'transparent'
    };
};

const KitColorbar = (props: IKitColorbar) => {
    const {appId} = useKitTheme();
    return (
        <Container $column={props.vertical ?? false} className={`${appId} ${props.className}`}>
            {props.colors?.map((item, i) => (
                <KitTooltip
                    key={`${item.label}_${i}`}
                    title={item.label}
                    placement={props.vertical ?? false ? 'right' : 'top'}
                >
                    <div style={_getSwatchStyle(item)} />
                </KitTooltip>
            ))}
        </Container>
    );
};

export default KitColorbar;
