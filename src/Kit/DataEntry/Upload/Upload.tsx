import React from 'react';
import {KitButton} from '@kit/General';
import {Upload as AntdUpload} from 'antd';
import {KitUploadProps} from './types';
import {LoadingOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {IKitUploadTheme} from '@theme/types/components/DataEntry/Upload';

const StyledUpload = styled(AntdUpload)<{
    $listType: String;
    $theme: IKitUploadTheme;
}>`
    &.ant-upload-wrapper {
        &.ant-upload-picture-card-wrapper {
            .ant-upload.ant-upload-select {
                height: 104px;
                width: 104px;
                border-radius: 2px;
                border-color: ${({$theme}) => $theme.colors.card.border.default};
                background-color: ${({$theme}) => $theme.colors.card.background.default};
            }

            .ant-upload-list.ant-upload-list-picture-card {
                .ant-upload-list-item {
                    border-radius: 2px;
                    border: 1px solid ${({$theme}) => $theme.colors.list.border.default};
                    &:hover::before {
                        width: 86px;
                        height: 86px;
                        background-color: ${({$theme}) => $theme.colors.list.preview.hover};
                    }

                    &.ant-upload-list-item-uploading {
                        border: 1px dashed ${({$theme}) => $theme.colors.list.border.uploading};
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
                    border-color: ${({$theme}) => $theme.colors.list.border.error};
                    color: ${({$theme}) => $theme.colors.list.typography.error};
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

        .ant-upload-list .ant-upload-list-item {
            border-radius: 2px;
            padding: ${({$listType}) => ($listType === 'text' || $listType === undefined ? '4px' : 'auto')};
        }

        .ant-upload-list-item-progress {
            padding-right: ${({$listType}) => ($listType === 'text' || $listType === undefined ? '4px' : 'auto')};
        }

        .ant-upload-list-item-done {
            border-color: ${({$theme}) => $theme.colors.list.border.default};
            .ant-upload-list-item-name {
                color: ${({$theme}) => $theme.colors.list.typography.done};
            }
        }

        .ant-upload-list-item-error {
            color: ${({$theme}) => $theme.colors.list.typography.error};
        }
    }
`;

const KitUpload: React.FunctionComponent<KitUploadProps> = ({
    listType = 'text',
    loading,
    imageUrl,
    buttonWording,
    showUploadList,
    ...uploadProps
}) => {
    const {theme} = useKitTheme();
    const uploadWording = buttonWording ?? 'Upload';

    return (
        <StyledUpload
            $theme={theme.components.Upload}
            $listType={listType}
            listType={listType}
            showUploadList={showUploadList}
            {...uploadProps}
        >
            {(listType === undefined || listType === 'text' || listType === 'picture') && (
                <KitButton icon={<UploadOutlined />}>{uploadWording}</KitButton>
            )}
            {showUploadList && listType === 'picture-card' && (
                <div>
                    <PlusOutlined />
                    <div style={{marginTop: 8}}>{uploadWording}</div>
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
                        <div style={{marginTop: 8}}>{uploadWording}</div>
                    </div>
                ))}
        </StyledUpload>
    );
};

KitUpload.displayName = 'KitUpload';

export default KitUpload;
