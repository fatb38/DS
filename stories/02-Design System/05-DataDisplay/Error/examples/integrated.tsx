import {FunctionComponent} from 'react';
import {KitError} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {AntLayout} from '@kit/Ant';
import {KitHeader} from '@kit/Navigation';
import {langSwitcherExample, menuContentExample, userProfileExample} from '../../../03-Navigation/Header/commons.tsx';
import {KitInput} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {KitSpace} from '@kit/Layout';

const _Description: FunctionComponent = () => (
    <KitSpace direction="vertical" size="s">
        <KitTypography.Paragraph>This page seems to be or is become unreachable.</KitTypography.Paragraph>
        <KitTypography.Paragraph>You can continue to navigate by go back to home page.</KitTypography.Paragraph>
    </KitSpace>
);

const App = () => (
    <AntLayout>
        <KitHeader
            menu={menuContentExample}
            logo={<img alt="" src="public/images/omnipublish-logo.svg" />}
            profile={userProfileExample}
            langSwitcher={langSwitcherExample}
        >
            <KitInput placeholder="Search..." prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
        </KitHeader>
        <AntLayout.Content style={{backgroundColor: 'var(--general-colors-primary-50)'}}>
            <KitError title="Page not found" description={<_Description />} httpErrorCode="404" />
        </AntLayout.Content>
    </AntLayout>
);

export default App;
