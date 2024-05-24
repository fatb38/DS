import React, {FunctionComponent} from 'react';
import {KitError} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInput} from '@kit/DataEntry';

const _Description: FunctionComponent = () => (
    <>
        <KitTypography.Paragraph>This page seems to be or is become unreachable.</KitTypography.Paragraph>
        <KitTypography.Paragraph>You can continue to navigate by go back to home page.</KitTypography.Paragraph>
        <KitTypography.Paragraph>Or you can search:</KitTypography.Paragraph>
        <KitInput placeholder="Search" suffix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </>
);

const App = () => <KitError title="Page not found" description={<_Description />} />;

export default App;
