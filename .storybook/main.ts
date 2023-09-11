import type {StorybookConfig} from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
    stories: ['../**/01-Design/**/*.mdx', '../**/02-Design System/**/*.mdx', '../**/Root/**/*.mdx'],
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
        '@storybook/addon-onboarding',
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
    staticDirs: ['../public'],
    docs: {
        autodocs: true,
        docsMode: true
    }
};
export default config;
