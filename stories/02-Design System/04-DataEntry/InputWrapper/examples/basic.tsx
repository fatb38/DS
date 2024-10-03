import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';

const App = () => (
    <KitSpace direction="vertical">
        <KitInputWrapper label="label" helper="helper">
            <KitTypography.Text>Component to wrap</KitTypography.Text>
        </KitInputWrapper>
    </KitSpace>
);

export default App;
