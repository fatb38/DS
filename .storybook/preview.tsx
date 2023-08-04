import * as React from 'react';
import theme from "../src/theme";
import type { Preview } from "@storybook/react";
import { KitApp } from '../src/Kit/App';
import { DocsContainer } from '@storybook/blocks';
import { BackToTop, TableOfContents } from 'storybook-docs-toc';

const tocConfig = {
    tocSelector: '.js-toc',
    contentSelector: '.sbdocs-content',
    headingSelector: 'h2, h3, h4, h5',
    ignoreSelector: ".ant-space h1, .ant-space h2, .ant-space h3, .ant-space h4, .ant-space h5"
};

const Container = ({ children, ...props }) => {
    return <DocsContainer {...props} context={props.context}>
        {children}
    </DocsContainer>;
  };


export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical'
        },
    },
    docs: {
        // Decorate the docs area content with antd's ConfigProvider, in order to use theme in all pages ant components
        container: ({ children, context }) => {
            return (
                <>
                    <KitApp>
                        <Container context={context}>{children}</Container>
                        <TableOfContents className="sbdocs-toc--custom" config={tocConfig}/>
                        <BackToTop />
                    </KitApp>
                </>
            );
        }
    },
};

const preview: Preview = {
    decorators: [
        (Story) => {
            return <Story />;
        },
    ],
};

export default preview;