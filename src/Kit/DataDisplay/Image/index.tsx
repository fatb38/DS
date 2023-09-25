import React from 'react';
import {Image as AntdImage} from 'antd';
import {KitImageProps} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {KitImageTheme} from '@theme/types/components/DataDisplay/Image';

interface StyledKitImageProps extends KitImageProps {
    $theme: KitImageTheme;
    $rounded?: boolean;
    $bordered?: boolean;
}

const StyledImage = styled(AntdImage)<StyledKitImageProps>`
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

type CompoundedComponent = React.FunctionComponent<KitImageProps> & {
    PreviewGroup: typeof AntdImage.PreviewGroup;
};

const Image: React.FunctionComponent<KitImageProps> = ({rounded, bordered, ...props}) => {
    const {theme} = useKitTheme();

    return <StyledImage $theme={theme.components.Image} $rounded={rounded} $bordered={bordered} {...props} />;
};

export const KitImage = Image as unknown as CompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
// @ts-ignore
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = 'KitImage';
