import React, {FunctionComponent} from 'react';
import {Image as AntdImage} from 'antd';
import {IKitImage, IStyledKitImage, KitImageCompoundedComponent} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';

const StyledImage = styled(AntdImage)<IStyledKitImage>`
    border-radius: ${({$rounded, $theme}) =>
        $rounded ? $theme.border.radius.rounded : $theme.border.radius.default}px;
    border: ${({$bordered, $theme}) =>
        $bordered ? `1px solid ${$theme.colors.border.default}` : $theme.colors.border.none};

    + .ant-image-mask {
        border-radius: ${({$rounded, $theme}) =>
            $rounded ? $theme.border.radius.rounded : $theme.border.radius.default}px;
        border: ${({$bordered, $theme}) =>
            $bordered ? `1px solid ${$theme.colors.border.default}` : $theme.colors.border.none};
    }
`;

const Image: FunctionComponent<IKitImage> = ({rounded, bordered, ...props}) => {
    const {theme} = useKitTheme();

    return <StyledImage $theme={theme.components.Image} $rounded={rounded} $bordered={bordered} {...props} />;
};

export const KitImage = Image as KitImageCompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
// @ts-ignore
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = 'KitImage';
