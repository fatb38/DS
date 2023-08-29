import React from 'react';
import {KitButton} from '@kit/General';
import {Upload as AntdUpload} from 'antd';
import {KitUploadProps} from './types';
import {LoadingOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';
import theme from '../../../theme';
import styled from 'styled-components';

const {color} = theme;

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

const KitUpload: React.FunctionComponent<KitUploadProps> = ({
    listType = 'text',
    loading,
    imageUrl,
    showUploadList,
    ...uploadProps
}) => {
    return (
        <StyledUpload $listType={listType} listType={listType} showUploadList={showUploadList} {...uploadProps}>
            {(listType === undefined || listType === 'text' || listType === 'picture') && (
                <KitButton icon={<UploadOutlined />}>Upload</KitButton>
            )}
            {showUploadList && listType === 'picture-card' && (
                <div>
                    <PlusOutlined />
                    <div style={{marginTop: 8}}>Upload</div>
                </div>
            )}
            {!showUploadList &&
                listType === 'picture-card' &&
                (imageUrl ? (
                    <div style={{width: '100%', padding: '8px'}}>
                        <img src={imageUrl} alt="avatar" style={{width: '100%'}} />
                    </div>
                ) : (
                    <div>
                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                        <div style={{marginTop: 8}}>Upload</div>
                    </div>
                ))}
        </StyledUpload>
    );
};

KitUpload.displayName = 'KitUpload';

export default KitUpload;
