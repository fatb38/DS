import React, {FunctionComponent} from 'react';
import {Image as AntdImage} from 'antd';
import {IKitImage, IStyledKitImage, KitImageCompoundedComponent} from './types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {useKitLocale} from '@translation/useKitLocale';
import {kitImageCssTokens} from '@theme/aristid/components/DataDisplay/Image';
import {borderCssTokens} from '@theme/aristid/general/border';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';
import {convertToPixel} from '@theme/utils/convert';

const StyledImage = styled(AntdImage)<IStyledKitImage>`
    border-radius: ${({$rounded}) =>
        $rounded
            ? convertToPixel(kitImageCssTokens.border.radius.rounded, borderCssTokens.radius.s)
            : convertToPixel(kitImageCssTokens.border.radius.default, borderCssTokens.radius.square)};
    border: ${({$bordered}) =>
        $bordered
            ? `1px solid var(${kitImageCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`
            : `var(${kitImageCssTokens.colors.border.none}, none))`};

    + .ant-image-mask {
        border-radius: ${({$rounded}) =>
            $rounded
                ? convertToPixel(kitImageCssTokens.border.radius.rounded, borderCssTokens.radius.s)
                : convertToPixel(kitImageCssTokens.border.radius.default, borderCssTokens.radius.square)};
        border: ${({$bordered}) =>
            $bordered
                ? `1px solid var(${kitImageCssTokens.colors.border.default}, var(${kitColorsPaletteCssTokens.neutral.black60}))`
                : `var(${kitImageCssTokens.colors.border.none}, none))`};
    }
`;

const MaskContainer = styled.div`
    display: flex;
    gap: 6px;
`;

const Image: FunctionComponent<IKitImage> = ({rounded, bordered, preview, className, ...props}) => {
    const {locale} = useKitLocale();
    const {appId} = useKitTheme();

    const Mask = (
        <MaskContainer>
            <FontAwesomeIcon icon={faEye} />
            {locale.Image?.preview}
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
            className={`${appId} ${className ?? ''}`}
            $rounded={rounded}
            $bordered={bordered}
            preview={_getPreview()}
            {...props}
        />
    );
};

export const KitImage = Image as KitImageCompoundedComponent;

// TODO find out why it says previewGroup isn't in type, because it is
KitImage.PreviewGroup = AntdImage.PreviewGroup;
KitImage.displayName = 'KitImage';
