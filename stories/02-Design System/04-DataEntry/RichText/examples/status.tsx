import {KitRichText} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical" size="m">
        <KitRichText placeholder="PlaceHolder..." status="warning" showCount maxLength={100} />
        <KitRichText placeholder="PlaceHolder..." status="error" showCount maxLength={100} />
    </KitSpace>
);

export default App;
