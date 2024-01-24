import React, {FunctionComponent} from 'react';
import {Upload as AntdUpload} from 'antd';
import styled from 'styled-components';
import {IKitDragger} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInbox} from '@fortawesome/free-solid-svg-icons';
import {kitUploadDraggerCssTokens} from '@theme/aristid/components/DataEntry/Upload';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {convertToPixel} from '@theme/utils/convert';

const StyledDragger = styled(AntdUpload.Dragger)`
    .ant-upload {
        border-radius: 2px;

        &.ant-upload-drag {
            border: 1px dashed
                var(
                    ${kitUploadDraggerCssTokens.colors.border.default},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
                );

            &:hover {
                border-color: var(
                    ${kitUploadDraggerCssTokens.colors.border.hover},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }

            .ant-upload-btn {
                background-color: var(
                    ${kitUploadDraggerCssTokens.colors.background.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                );
            }
            .ant-upload-text {
                color: var(
                    ${kitUploadDraggerCssTokens.colors.typography.text},
                    var(${kitColorsPaletteCssTokens.neutral.typography.black})
                );
                font-size: ${convertToPixel(
                    kitUploadDraggerCssTokens.typography.fontSize,
                    typographyCssTokens.fontSize4
                )};
                font-weight: var(
                    ${kitUploadDraggerCssTokens.typography.fontWeight},
                    var(${typographyCssTokens.regularFontWeight})
                );
                line-height: var(
                    ${kitUploadDraggerCssTokens.typography.lineHeight},
                    var(${typographyCssTokens.lineHeight4})
                );
            }
            .ant-upload-hint {
                color: var(
                    ${kitUploadDraggerCssTokens.colors.typography.hint},
                    var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
                );
                margin-top: 8px;
                margin-bottom: 0;
            }
            .ant-upload-drag-icon {
                margin-top: 0;
                margin-bottom: 22px;

                svg {
                    font-size: 32px;
                    color: var(
                        ${kitUploadDraggerCssTokens.colors.dragIcon.default},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
                }
            }
        }
    }

    .ant-upload-list-item-name {
        color: var(
            ${kitUploadDraggerCssTokens.colors.typography.item},
            var(${kitColorsPaletteCssTokens.primary.primary400})
        );
    }
`;

const KitDragger: FunctionComponent<IKitDragger> = ({title, description, className, ...draggerProps}) => {
    const {appId} = useKitTheme();

    const draggerTitle = title ?? 'Click or drag file to this area to upload';
    const draggerDescription =
        description ??
        'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.';

    return (
        <StyledDragger {...draggerProps} className={`${appId} ${className ?? ''}`}>
            <p className="ant-upload-drag-icon">
                <FontAwesomeIcon icon={faInbox} />
            </p>
            <p className="ant-upload-text">{draggerTitle}</p>
            <p className="ant-upload-hint">{draggerDescription}</p>
        </StyledDragger>
    );
};

export default KitDragger;
