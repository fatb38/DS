import React, {RefAttributes} from 'react';
import type {Preview} from '@storybook/react';
import {KitApp} from '../src';
import {DocsContainer} from '@storybook/blocks';
import TableOfContents from './components/TableOfContents';
import BackToTop from './components/BackToTop';
import AccessibilityProvider from './components/Accessibility/AccessibilityProvider';
import {PackageVersionNumber} from './components/PackageVersionNumber';

const tocConfig = {
    tocSelector: '.js-toc',
    contentSelector: '.sbdocs-content',
    headingSelector: 'h2, h3, h4, h5',
    ignoreSelector: '.ant-space h1, .ant-space h2, .ant-space h3, .ant-space h4, .ant-space h5'
};

const Container = ({children, ...props}) => {
    return (
        <DocsContainer {...props} context={props.context}>
            <AccessibilityProvider active>{children}</AccessibilityProvider>
        </DocsContainer>
    );
};

export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    options: {
        storySort: {
            method: 'alphabetical'
        }
    },
    docs: {
        // Decorate the docs area content with antd's ConfigProvider, in order to use theme in all pages ant components
        container: ({children, context}) => {
            return (
                <KitApp locale={{locale: 'enUS'}}>
                    <PackageVersionNumber />
                    <Container context={context}>{children}</Container>
                    <TableOfContents config={tocConfig} />
                    <BackToTop />
                </KitApp>
            );
        }
    }
};

const preview: Preview = {
    decorators: [
        Story => {
            return (
                <KitApp locale={{locale: 'enUS'}}>
                    <Story />
                </KitApp>
            );
        }
    ]
};

export default preview;
