import {KitRichText} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical" size="m">
        <KitRichText placeholder="PlaceHolder..." showCount />
        <KitRichText placeholder="PlaceHolder..." showCount maxLength={100} />
    </KitSpace>
);

export default App;
