import React, {FunctionComponent} from 'react';
import {Image as AntdImage} from 'antd';
import {IKitImage} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {IKitImageTheme} from '@theme/types/components/DataDisplay/Image';

const StyledImage = styled(AntdImage)<{
    $theme: IKitImageTheme;
    $rounded?: boolean;
    $bordered?: boolean;
}>`
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

type CompoundedComponent = FunctionComponent<IKitImage> & {
    PreviewGroup: typeof AntdImage.PreviewGroup;
};

const Image: FunctionComponent<IKitImage> = ({rounded, bordered, ...props}) => {
    const {theme} = useKitTheme();

    return <StyledImage $theme={theme.components.Image} $rounded={rounded} $bordered={bordered} {...props} />;
};

export const KitImage = Image as unknown as CompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
// @ts-ignore
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = 'KitImage';
