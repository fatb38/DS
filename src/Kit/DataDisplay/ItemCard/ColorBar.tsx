import React from 'react';
import {IKitColorbar, CardColor, IStyledKitColorbar} from './types';
import styled from 'styled-components';
import {KitTooltip} from '../Tooltip';
import {useKitTheme} from '@theme/useKitTheme';
import {kitItemCardCssTokens} from '@theme/aristid/components/DataDisplay/ItemCard';
import {borderCssTokens} from '@theme/aristid/general/border';
import {convertToPixel} from '@theme/utils/convert';

const Container = styled.div<IStyledKitColorbar>`
    width: ${({$column}) => ($column ? convertToPixel(kitItemCardCssTokens.colorBar.thickness, 8) : 'auto')};
    height: ${({$column}) => ($column ? 'auto' : convertToPixel(kitItemCardCssTokens.colorBar.thickness, 8))};
    border-radius: ${convertToPixel(kitItemCardCssTokens.colorBar.border.radius, borderCssTokens.radius.s)};
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
