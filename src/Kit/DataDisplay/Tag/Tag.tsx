import React, {FunctionComponent, useMemo} from 'react';
import {Tag} from 'antd';
import styled from 'styled-components';
import {IKitTag, IStyledAntdTag} from './types';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';

const StyledAntdTag = styled(Tag)<IStyledAntdTag>`
    padding: 4px 8px;
    border: none;
    height: 24px;

    > div {
        padding-left: 0;
    }

    &,
    a {
        font-size: ${({$theme}) => $theme.typography.fontSize}px;
        font-family: ${({$theme}) => $theme.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.typography.fontWeight};
        line-height: 16px;
        box-sizing: border-box;
        display: flex;
        width: fit-content;
    }

    .ant-tag-close-icon {
        margin-left: 8px;
    }

    background: ${({$backgroundColor}) => $backgroundColor};
    color: ${({$color}) => $color};

    .ant-tag-close-icon {
        color: ${({$color}) => $color};

        &:hover {
            color: ${({$color}) => $color};
        }
    }
`;

const KitTag: FunctionComponent<IKitTag> = ({closeIcon, color, secondaryColorInvert = false, ...tagProps}) => {
    const {theme} = useKitTheme();

    const calculatedBackgroundColor = useMemo(() => {
        if (!color || !isValidColor(theme.general.colors, color)) {
            return theme.components.Tag.colors.default.background.default;
        }

        return getColor(theme.general.colors, color, secondaryColorInvert);
    }, [color, secondaryColorInvert, theme]);

    const calculatedFontColor = useMemo(() => {
        if (!color || !isValidColor(theme.general.colors, color)) {
            return theme.components.Tag.colors.default.typography.default;
        }

        return getLighterColor(theme.general.colors, color, secondaryColorInvert);
    }, [color, secondaryColorInvert, theme]);

    return (
        <StyledAntdTag
            {...tagProps}
            $theme={theme.components.Tag}
            $color={calculatedFontColor}
            $backgroundColor={calculatedBackgroundColor}
            closeIcon={closeIcon ?? <FontAwesomeIcon icon={faXmark} />}
            closable={!!tagProps.onClose}
        />
    );
};

export default KitTag;
