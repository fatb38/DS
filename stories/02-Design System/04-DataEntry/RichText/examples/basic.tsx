import {KitRichText} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical" style={{width: 500}}>
        <KitRichText placeholder="PlaceHolder..." />
        <KitRichText placeholder="PlaceHolder..." defaultValue="<p>Default value</p>" />
    </KitSpace>
);

export default App;
