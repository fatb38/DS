import {KitSelect} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';
import {KitPageLayout} from '@kit/Layout';
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

const App = () => (
    <KitPageLayout headerProps={{menu, langSwitcher, logo}}>
        <Content />
    </KitPageLayout>
);

export default App;
