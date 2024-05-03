import React, {FunctionComponent} from 'react';
import {KitError} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';

const _Description: FunctionComponent = () => (
    <>
        <KitTypography.Paragraph>This page seems to be or is become unreachable.</KitTypography.Paragraph>
        <KitTypography.Paragraph>You can continue to navigate by go back to home page.</KitTypography.Paragraph>
    </>
);

const App = () => (
    <div style={{width: '300px', margin: '0 auto', backgroundColor: 'var(--general-colors-primary-primary50)'}}>
        <KitError title="Page not found" description={<_Description />} />
    </div>
);

export default App;
