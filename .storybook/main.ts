import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
    stories: ['../stories/!(template)/**/*.mdx', '../stories/!(template)/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        },
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    core: {
        enableCrashReports: false,
        disableTelemetry: true
    },
    staticDirs: [{ from: '../public', to: '/public' }],
    docs: {
        autodocs: true,
        docsMode: true
    }
};
export default config;
