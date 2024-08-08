import React, {FunctionComponent} from 'react';
import {KitError} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {AntLayout} from '@kit/Ant';
import {KitHeader} from '@kit/Navigation';
import {langSwitcherExample, menuContentExample, userProfileExample} from '../../../03-Navigation/Header/commons.tsx';
import {KitInput} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const _Description: FunctionComponent = () => (
    <>
        <KitTypography.Paragraph>This page seems to be or is become unreachable.</KitTypography.Paragraph>
        <KitTypography.Paragraph>You can continue to navigate by go back to home page.</KitTypography.Paragraph>
    </>
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
            <KitError title="Page not found" description={<_Description />} />
        </AntLayout.Content>
    </AntLayout>
);

export default App;
