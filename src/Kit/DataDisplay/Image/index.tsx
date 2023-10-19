import React, {FunctionComponent} from 'react';
import {Image as AntdImage} from 'antd';
import {IKitImage, IStyledKitImage, KitImageCompoundedComponent} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {useKitLocale} from '@translation/locale-context';

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

const MaskContainer = styled.div`
    display: flex;
    gap: 6px;
`;

const Image: FunctionComponent<IKitImage> = ({rounded, bordered, preview, ...props}) => {
    const {theme} = useKitTheme();
    const {locale} = useKitLocale();

    const Mask = (
        <MaskContainer>
            <FontAwesomeIcon icon={faEye} />
            {locale.Image.preview}
        </MaskContainer>
    );

    const _getPreview = () => {
        if (typeof preview === 'object') {
            return {mask: Mask, ...preview};
        }
        if (preview === undefined) {
            return {mask: Mask};
        }
        return preview;
    };

    return (
        <StyledImage
            $theme={theme.components.Image}
            $rounded={rounded}
            $bordered={bordered}
            preview={_getPreview()}
            {...props}
        />
    );
};

export const KitImage = Image as KitImageCompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
// @ts-ignore
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = 'KitImage';
