import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
    <KitSpace align="start">
        <KitInput.TextArea placeholder="Autosize height based on content lines" autoSize />
        <KitInput.TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autoSize={{minRows: 2, maxRows: 6}}
        />
    </KitSpace>
);

export default App;
