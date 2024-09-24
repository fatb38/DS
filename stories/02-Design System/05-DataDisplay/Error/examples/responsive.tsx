import {FunctionComponent} from 'react';
import {KitError} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';

const _Description: FunctionComponent = () => (
    <KitSpace direction="vertical" size="s">
        <KitTypography.Paragraph>This page seems to be or is become unreachable.</KitTypography.Paragraph>
        <KitTypography.Paragraph>You can continue to navigate by go back to home page.</KitTypography.Paragraph>
    </KitSpace>
);

const App = () => (
    <div style={{width: '300px', margin: '0 auto', backgroundColor: 'var(--general-colors-primary-50)'}}>
        <KitError title="Page not found" description={<_Description />} httpErrorCode="404" />
    </div>
);

export default App;
