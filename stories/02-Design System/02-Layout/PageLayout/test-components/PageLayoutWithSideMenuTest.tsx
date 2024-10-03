import {faChartLine, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitTag} from '@kit/DataDisplay';
import {KitSelect} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';
import {KitPageLayout} from '@kit/Layout';
import {IKitSideMenuItemProps} from '@kit/Navigation/SideMenu/types';
import {FunctionComponent} from 'react';
import {FlagIcon} from 'react-flag-kit';

const menu = (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <img src="public/images/omnipublish-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/pim-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
        <img src="public/images/dam-logo.svg" style={{width: '100px', height: '100px'}} alt="" />
    </div>
);

const flagWidth = 20;

const languageOptions = [
    {
        value: 'en',
        icon: <FlagIcon code="GB" size={flagWidth} className="flagIcon" />,
        label: 'EN'
    },
    {
        value: 'fr',
        icon: <FlagIcon code="FR" size={flagWidth} className="flagIcon" />,
        label: 'FR'
    }
];

const items: IKitSideMenuItemProps[] = [
    {
        key: 'home',
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHome} />,
        onClick: () => console.log('item 1 clicked')
    },
    {
        key: 'users',
        title: 'Users',
        icon: <FontAwesomeIcon icon={faUser} />,
        onClick: () => console.log('item 2 clicked')
    },
    {
        type: 'separator'
    },
    {
        key: 'statistics',
        title: 'Statistics',
        complement: <KitTag type="primary" idCardProps={{description: 'Upcoming'}} />,
        disabled: true,
        icon: <FontAwesomeIcon icon={faChartLine} />,
        onClick: () => console.log('item 2 clicked')
    }
];

const langSwitcher = (
    <KitSelect style={{width: '120px'}} options={languageOptions} allowClear={false} defaultValue="en" />
);

const Content = () => (
    <>
        <KitTypography.Title level="h1">This is an exemple page content</KitTypography.Title>
        <KitTypography.Title level="h2">Subtitle Goes Here</KitTypography.Title>
        <KitTypography.Paragraph style={{marginBottom: '10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent ac diam sed lorem
            convallis consectetur non non nisi.
        </KitTypography.Paragraph>
        <KitTypography.Paragraph style={{marginBottom: '10px'}}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean ac erat
            risus. Phasellus vulputate, ligula at euismod ullamcorper, justo metus varius metus, nec dapibus elit nisl
            in lorem.
        </KitTypography.Paragraph>
        <KitTypography.Paragraph>
            Donec sollicitudin odio nec arcu feugiat, vitae bibendum lacus fermentum. Morbi mattis feugiat urna, at
            interdum nisi consequat id. In suscipit libero sit amet arcu scelerisque, sit amet congue justo facilisis.
        </KitTypography.Paragraph>
    </>
);

const logo = <img src="public/images/omnipublish-logo.svg" alt="" />;

export const PageLayoutWithSideMenuTest: FunctionComponent = () => (
    <KitPageLayout
        sideMenuProps={{open: true, items}}
        headerProps={{menu, langSwitcher, logo}}
        backgroundColor="var(--general-colors-primary-50)"
    >
        <Content />
    </KitPageLayout>
);
