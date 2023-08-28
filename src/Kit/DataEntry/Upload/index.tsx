import React from 'react';
import {Upload as AntdUpload} from 'antd';
import styled from 'styled-components';
import {KitUploadProps} from './types';
import theme from '../../../theme';
import {InboxOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';
import {KitButton} from '@kit/General';

const {color, typography} = theme;
const {Dragger: AntdDragger} = AntdUpload;

const StyledUpload = styled(AntdUpload)<{$listType: String}>`
    &.ant-upload-wrapper {
        &.ant-upload-picture-card-wrapper {
            .ant-upload.ant-upload-select {
                height: 104px;
                width: 104px;
                border-radius: 2px;
                border-color: ${color.primary.blue400};
                background-color: ${color.secondary.mediumGrey.mediumGrey100};
            }

            .ant-upload-list {
                .ant-upload-list-picture-card {
                    .ant-upload-list-item {
                        border-radius: 2px;
                        border: 1px solid ${color.neutral.gray.gray400};
                        &:hover::before {
                            width: 86px;
                            height: 86px;
                            background-color: rgba(6, 32, 100, 0.5);
                        }

                        &.ant-upload-list-item-uploading {
                            border: 1px dashed ${color.primary.blue400};
                        }
                    }
                    .ant-upload-list-item-container {
                        height: 104px;
                        width: 104px;
                    }
                    .ant-upload-list-item-thumbnail img {
                        height: 86px;
                        width: 86px;
                    }
                    .ant-upload-list-item-error {
                        border-color: ${color.secondary.red.red400};
                        color: ${color.secondary.red.red400};
                    }
                }
                .ant-upload-list-picture {
                    .ant-upload-list-item-container {
                        .ant-upload-list-item .ant-upload-list-item-uploading {
                            border-radius: 200px;
                        }
                    }
                }
            }
        }
        .ant-upload-list .ant-upload-list-item {
            border-radius: 2px;
            padding: ${({$listType}) => ($listType === 'text' || $listType === undefined ? '4px' : 'auto')};
        }

        .ant-upload-list-item-progress {
            padding-right: ${({$listType}) => ($listType === 'text' || $listType === undefined ? '4px' : 'auto')};
        }

        .ant-upload-list-item-done {
            border-color: ${color.neutral.gray.gray400};
            .ant-upload-list-item-name {
                color: ${color.primary.blue400};
            }
        }

        .ant-upload-list-item-error {
            color: ${color.secondary.red.red400};
        }
    }
`;

const StyledDragger = styled(AntdDragger)`
    .ant-upload {
        border-radius: 2px;
        .ant-upload-btn {
            ${color.secondary.mediumGrey.mediumGrey100}
        }
        .ant-upload-text {
            color: #000;
            font-size: ${typography.fontSize5};
            line-height: ${typography.lineHeight5};
            font-weight: ${typography.regularFontWeight};
        }
        .ant-upload-hint {
            color: ${color.neutral.gray.gray400} !important;
            margin-top: 8px;
            margin-bottom: 0;
        }
        .ant-upload-drag-icon {
            margin-top: 0;
            margin-bottom: 22px;
        }
    }
    .ant-upload-wrapper .ant-upload-drag {
        border: 1px solid ${color.neutral.gray.gray400};
    }
`;

export const KitUpload: React.FunctionComponent<KitUploadProps> = ({listType = 'text', ...uploadProps}) => {
    return (
        <StyledUpload $listType={listType} listType={listType} {...uploadProps}>
            {(listType === undefined || listType === 'text' || listType === 'picture') && (
                <KitButton icon={<UploadOutlined />}>Upload</KitButton>
            )}
            {listType === 'picture-card' && (
                <div>
                    <PlusOutlined />
                    <div style={{marginTop: 8}}>Upload</div>
                </div>
            )}
        </StyledUpload>
    );
};

export const KitDragger: React.FunctionComponent<any> = ({...draggerProps}) => {
    return (
        <StyledDragger {...draggerProps}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned
                files.
            </p>
        </StyledDragger>
    );
};

KitUpload.displayName = 'KitUpload';
