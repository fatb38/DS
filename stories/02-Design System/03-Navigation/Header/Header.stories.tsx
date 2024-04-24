import type {Meta, StoryObj} from '@storybook/react';
import {KitHeader} from '@kit/Navigation';
import {argTypes} from './data.ts';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {Template} from './Template.tsx';
import {menuContentExample, logoExample, userProfileExample, langSwitcherExample} from './commons.tsx';
import {KitIdCard} from '@kit/DataDisplay/index.tsx';

const meta: Meta<typeof KitHeader> = {
    component: KitHeader,
    title: 'Design System/Navigation/Header',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitHeader>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

const userProfileProps = {
    logo: '/public/images/logo.png',
    tag: 'grenoble',
    userCard: <KitIdCard avatarProps={{src: 'public/images/portrait.png'}} />
};

export const ChromaticTest: Story = {
    render: () => {
        const headerContent = <KitTypography.Title level="h2">Header content</KitTypography.Title>;

        return (
            <div style={{padding: '20px', background: '#F7F7F7'}}>
                <KitSpace direction="vertical" style={{width: 'calc(100% - 20px'}}>
                    <KitTypography.Title level="h4">Simple Header</KitTypography.Title>
                    <KitHeader>{headerContent}</KitHeader>
                    <KitTypography.Title level="h4">Header with Menu</KitTypography.Title>
                    <KitHeader menu={menuContentExample}>{headerContent}</KitHeader>
                    <KitTypography.Title level="h4">Header with logo</KitTypography.Title>
                    <KitHeader logo={logoExample}>{headerContent}</KitHeader>
                    <KitTypography.Title level="h4">Header with profile</KitTypography.Title>
                    <KitHeader profile={<KitHeader.Profile logo={userProfileProps.logo} alt="Logo ARiSTiD" />}>
                        {headerContent}
                    </KitHeader>
                    <KitHeader profile={<KitHeader.Profile tag={userProfileProps.tag} />}>{headerContent}</KitHeader>
                    <KitHeader profile={<KitHeader.Profile userCard={userProfileProps.userCard} />}>
                        {headerContent}
                    </KitHeader>
                    <KitHeader profile={<KitHeader.Profile {...userProfileProps} />}>{headerContent}</KitHeader>
                    <KitTypography.Title level="h4">Header with lang Switcher</KitTypography.Title>
                    <KitHeader langSwitcher={langSwitcherExample}>{headerContent}</KitHeader>
                    <KitTypography.Title level="h4">Full Header</KitTypography.Title>
                    <KitHeader
                        menu={menuContentExample}
                        logo={logoExample}
                        profile={userProfileExample}
                        langSwitcher={langSwitcherExample}
                    >
                        {headerContent}
                    </KitHeader>
                </KitSpace>
            </div>
        );
    }
};
