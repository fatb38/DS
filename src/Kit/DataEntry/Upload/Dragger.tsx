import React, {FunctionComponent} from 'react';
import {Upload as AntdUpload} from 'antd';
import styled from 'styled-components';
import {IKitDragger, IStyledDragger} from './types';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInbox} from '@fortawesome/free-solid-svg-icons';

const StyledDragger = styled(AntdUpload.Dragger)<IStyledDragger>`
    .ant-upload {
        border-radius: 2px;

        &.ant-upload-drag {
            border: 1px dashed ${({$theme}) => $theme.colors.border.default};

            &:hover {
                border-color: ${({$theme}) => $theme.colors.border.hover};
            }

            .ant-upload-btn {
                background-color: ${({$theme}) => $theme.colors.background.default};
            }
            .ant-upload-text {
                color: ${({$theme}) => $theme.colors.typography.text};
                font-size: ${({$theme}) => $theme.typography.fontSize}px;
                font-weight: ${({$theme}) => $theme.typography.fontWeight};
                line-height: ${({$theme}) => $theme.typography.lineHeight};
            }
            .ant-upload-hint {
                color: ${({$theme}) => $theme.colors.typography.hint};
                margin-top: 8px;
                margin-bottom: 0;
            }
            .ant-upload-drag-icon {
                margin-top: 0;
                margin-bottom: 22px;

                svg {
                    font-size: 32px;
                    color: ${({$theme}) => $theme.colors.dragIcon.default};
                }
            }
        }
    }

    .ant-upload-list-item-name {
        color: ${({$theme}) => $theme.colors.typography.item};
    }
`;

const KitDragger: FunctionComponent<IKitDragger> = ({title, description, ...draggerProps}) => {
    const {theme} = useKitTheme();

    const draggerTitle = title ?? 'Click or drag file to this area to upload';
    const draggerDescription =
        description ??
        'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.';

    return (
        <StyledDragger $theme={theme.components.Upload.Dragger} {...draggerProps}>
            <p className="ant-upload-drag-icon">
                <FontAwesomeIcon icon={faInbox} />
            </p>
            <p className="ant-upload-text">{draggerTitle}</p>
            <p className="ant-upload-hint">{draggerDescription}</p>
        </StyledDragger>
    );
};

export default KitDragger;
