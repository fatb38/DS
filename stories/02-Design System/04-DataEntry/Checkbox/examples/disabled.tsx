import {KitCheckbox} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
    <KitSpace direction="vertical">
        <KitCheckbox defaultChecked={false} disabled>
            Unchecked
        </KitCheckbox>
        <KitCheckbox indeterminate disabled>
            Indeterminate
        </KitCheckbox>
        <KitCheckbox defaultChecked disabled>
            Checked
        </KitCheckbox>
    </KitSpace>
);

export default App;
