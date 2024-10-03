import {FunctionComponent} from 'react';
import {KitError} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitInput} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const _Description: FunctionComponent = () => (
    <KitSpace direction="vertical" size="s">
        <KitTypography.Paragraph>This page seems to be or is become unreachable.</KitTypography.Paragraph>
        <KitTypography.Paragraph>You can continue to navigate by go back to home page.</KitTypography.Paragraph>
        <KitTypography.Paragraph>Or you can search:</KitTypography.Paragraph>
        <KitInput placeholder="Search" suffix={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
    </KitSpace>
);

const App = () => <KitError title="Page not found" description={<_Description />} httpErrorCode="404" />;

export default App;
