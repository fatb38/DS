import React, {CSSProperties, forwardRef, useMemo} from 'react';
import {Tag} from 'antd';
import styled from 'styled-components';
import {IKitTag} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitTagCssTokens} from '@theme/aristid/components/DataDisplay/Tag';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';

const StyledAntdTag = styled(Tag)`
    padding: 4px 8px;
    border: none;
    height: 24px;

    > div {
        padding-left: 0;
    }

    &,
    a {
        font-size: calc(var(${kitTagCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize7})) * 1px);
        font-family: var(${kitTagCssTokens.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
        font-weight: var(${kitTagCssTokens.typography.fontWeight}, var(${typographyCssTokens.regularFontWeight}));
        line-height: 16px;
        box-sizing: border-box;
        display: flex;
        width: fit-content;
    }

    .ant-tag-close-icon {
        margin-left: 8px;
    }

    background: var(
        ${kitTagCssTokens.colors.default.background.default},
        var(${kitColorsPaletteCssTokens.primary.primary100})
    );
    color: var(
        ${kitTagCssTokens.colors.default.typography.default},
        var(${kitColorsPaletteCssTokens.neutral.typography.black})
    );

    .ant-tag-close-icon {
        color: var(
            ${kitTagCssTokens.colors.default.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.black})
        );

        &:hover {
            color: var(
                ${kitTagCssTokens.colors.default.typography.default},
                var(${kitColorsPaletteCssTokens.neutral.typography.black})
            );
        }
    }
`;

const getCustomColors = (
    color: IKitTag['color'],
    secondaryColorInvert: IKitTag['secondaryColorInvert']
): CSSProperties | null => {
    if (color && isValidColor(color)) {
        return {
            [kitTagCssTokens.colors.default.background.default]: getColor(color, secondaryColorInvert),
            [kitTagCssTokens.colors.default.typography.default]: getLighterColor(color, secondaryColorInvert)
        } as CSSProperties;
    }
    return null;
};

export const InternalTag = forwardRef<HTMLElement, IKitTag>(
    ({className, closeIcon, color, style, secondaryColorInvert = false, ...tagProps}, ref) => {
        const {appId} = useKitTheme();

        const customStyle = useMemo(
            () => ({...style, ...getCustomColors(color, secondaryColorInvert)}),
            [color, secondaryColorInvert, style]
        );

        return (
            <StyledAntdTag
                ref={ref}
                {...tagProps}
                style={customStyle}
                className={`${appId} ${className ?? ''}`}
                closeIcon={closeIcon ?? <FontAwesomeIcon icon={faXmark} />}
                closable={!!tagProps.onClose}
            />
        );
    }
);
