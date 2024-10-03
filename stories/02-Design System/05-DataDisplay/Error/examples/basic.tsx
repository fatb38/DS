import {KitError} from '@kit/DataDisplay';
import KitParagraph from '@kit/General/Typography/Paragraph';

const App = () => (
    <KitError
        title="Unauthorized"
        description={<KitParagraph>This page does not seem to exist or no longer exists.</KitParagraph>}
        httpErrorCode="401"
    />
);

export default App;
