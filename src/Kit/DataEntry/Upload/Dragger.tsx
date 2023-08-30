import React from 'react';
import {Upload as AntdUpload} from 'antd';
import styled from 'styled-components';
import theme from '@theme/index';
import {InboxOutlined} from '@ant-design/icons';
import { KitDraggerProps } from './types';

const {Dragger: AntdDragger} = AntdUpload;
const {color, typography} = theme;

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

    .ant-upload-list-item-name {
        color: ${color.primary.blue400};
    }
`;

const KitDragger: React.FunctionComponent<KitDraggerProps> = ({title, description, ...draggerProps}) => {
    const draggerTitle = title ?? 'Click or drag file to this area to upload'
    const draggerDescription = description ?? 'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.'
    
    return (
        <StyledDragger {...draggerProps}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">{draggerTitle}</p>
            <p className="ant-upload-hint">{draggerDescription}</p>
        </StyledDragger>
    );
};

export default KitDragger;
