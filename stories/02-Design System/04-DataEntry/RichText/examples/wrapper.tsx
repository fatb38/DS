import {KitRichText} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical" size="m">
        <KitRichText label="Label" helper="Helper" placeholder="PlaceHolder..." showCount maxLength={100} />
        <KitRichText label="Label" helper="Helper" placeholder="PlaceHolder..." disabled showCount maxLength={100} />
        <KitRichText
            label="Label"
            helper="Helper"
            placeholder="PlaceHolder..."
            status="warning"
            showCount
            maxLength={100}
        />
        <KitRichText
            label="Label"
            helper="Helper"
            placeholder="PlaceHolder..."
            status="error"
            showCount
            maxLength={100}
        />
    </KitSpace>
);

export default App;
