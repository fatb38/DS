import React, {forwardRef} from 'react';
import {KitButton} from '@kit/General';
import {Upload as AntdUpload} from 'antd';
import {IKitUpload, IStyledUpload} from './types';
import styled from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch, faPlus, faUpload} from '@fortawesome/free-solid-svg-icons';
import {UploadRef} from 'antd/lib/upload/Upload';
import {kitUploadCssTokens} from '@theme/aristid/components/DataEntry/Upload';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledUpload = styled(AntdUpload)<IStyledUpload>`
    &.ant-upload-wrapper {
        &.ant-upload-picture-card-wrapper {
            .ant-upload.ant-upload-select {
                height: 104px;
                width: 104px;
                border-radius: 2px;
                border-color: var(
                    ${kitUploadCssTokens.colors.card.border.default},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
                background-color: var(
                    ${kitUploadCssTokens.colors.card.background.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                );
            }

            .ant-upload-list.ant-upload-list-picture-card {
                .ant-upload-list-item {
                    border-radius: 2px;
                    border: 1px solid
                        var(
                            ${kitUploadCssTokens.colors.list.border.default},
                            var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
                        );

                    &:hover::before {
                        width: 86px;
                        height: 86px;
                        background-color: var(${kitUploadCssTokens.colors.list.preview.hover}, rgba(6, 32, 100, 0.5));
                    }

                    &.ant-upload-list-item-uploading {
                        border: 1px dashed
                            var(
                                ${kitUploadCssTokens.colors.list.border.uploading},
                                var(${kitColorsPaletteCssTokens.primary.primary400})
                            );
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
                    border-color: var(
                        ${kitUploadCssTokens.colors.list.border.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                    color: var(
                        ${kitUploadCssTokens.colors.list.typography.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
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

        .ant-upload-list-item-uploading {
            .ant-upload-list-item-name {
                color: var(
                    ${kitUploadCssTokens.colors.list.typography.uploading},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }
        }

        .ant-upload-list-item-progress {
            padding-right: ${({$listType}) => ($listType === 'text' || $listType === undefined ? '4px' : 'auto')};
        }

        .ant-upload-list-item-done {
            border-color: var(
                ${kitUploadCssTokens.colors.list.border.default},
                var(${kitColorsPaletteCssTokens.neutral.grey.grey400})
            );
            .ant-upload-list-item-name {
                color: var(
                    ${kitUploadCssTokens.colors.list.typography.done},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }
        }

        .ant-upload-list-item-error {
            color: var(
                ${kitUploadCssTokens.colors.list.typography.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }
`;

const KitUpload = forwardRef<UploadRef, IKitUpload>(
    ({listType = 'text', loading, imageUrl, buttonWording, showUploadList, className, ...uploadProps}, ref) => {
        const {appId} = useKitTheme();
        const uploadWording = buttonWording ?? 'Upload';

        return (
            <StyledUpload
                {...uploadProps}
                $listType={listType}
                listType={listType}
                showUploadList={showUploadList}
                ref={ref}
                className={`${appId} ${className ?? ''}`}
            >
                {(listType === undefined || listType === 'text' || listType === 'picture') && (
                    <KitButton icon={<FontAwesomeIcon icon={faUpload} />}>{uploadWording}</KitButton>
                )}
                {showUploadList && listType === 'picture-card' && (
                    <div>
                        <FontAwesomeIcon icon={faPlus} />
                        <div style={{marginLeft: 4}}>{uploadWording}</div>
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
                            {loading ? (
                                <FontAwesomeIcon icon={faCircleNotch} spin />
                            ) : (
                                <FontAwesomeIcon icon={faPlus} />
                            )}
                            <div style={{marginLeft: 4}}>{uploadWording}</div>
                        </>
                    ))}
            </StyledUpload>
        );
    }
);

KitUpload.displayName = 'KitUpload';

export default KitUpload;
