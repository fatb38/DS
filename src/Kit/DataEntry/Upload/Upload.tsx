import React, {FunctionComponent} from 'react';
import {KitButton} from '@kit/General';
import {Upload as AntdUpload} from 'antd';
import {IKitUpload, IStyledUpload} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch, faPlus, faUpload} from '@fortawesome/free-solid-svg-icons';

const StyledUpload = styled(AntdUpload)<IStyledUpload>`
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

const KitUpload: FunctionComponent<IKitUpload> = ({
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
                <KitButton icon={<FontAwesomeIcon icon={faUpload} />}>{uploadWording}</KitButton>
            )}
            {showUploadList && listType === 'picture-card' && (
                <div>
                    <FontAwesomeIcon icon={faPlus} />
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
                    <>
                        {loading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : <FontAwesomeIcon icon={faPlus} />}
                        <div style={{marginTop: 8}}>{uploadWording}</div>
                    </>
                ))}
        </StyledUpload>
    );
};

KitUpload.displayName = 'KitUpload';

export default KitUpload;
