import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {version} from '../../package.json';

const Tag = styled.div`
    position: fixed;
    right: 0;
    margin: 10px 10px 0 0;
    padding: 4px 8px;
    line-height: 16px;
    background-color: var(--general-colors-primary-400);
    color: var(--general-colors-neutral-white);
    font-size: calc(var(--general-typography-fontSize7) * 1px);
    font-family: var(--general-typography-fontFamily);
    font-weight: var(--general-typography-regularFontWeight);
    border-radius: calc(var(--general-border-radius-s) * 1px);
`;

export const PackageVersionNumber: FunctionComponent = () => {
    return <Tag>Version: {version}</Tag>;
};
