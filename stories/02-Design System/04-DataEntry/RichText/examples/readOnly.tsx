import {KitRichText} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const richTextValue =
    '<p>Formatted text with <strong>bold</strong> and bullet points</p><ul><li><p>Point 1</p></li><li><p>Point 2</p></li></ul>';

const App = () => (
    <KitSpace direction="vertical" size="s">
        <KitRichText label="Label ReadOnly" placeholder="PlaceHolder..." defaultValue={richTextValue} readonly />
        <KitRichText
            label="Label ReadOnly Warning"
            placeholder="PlaceHolder..."
            defaultValue={richTextValue}
            status="warning"
            readonly
        />
        <KitRichText
            label="Label ReadOnly Error"
            placeholder="PlaceHolder..."
            defaultValue={richTextValue}
            status="error"
            readonly
        />
    </KitSpace>
);

export default App;
