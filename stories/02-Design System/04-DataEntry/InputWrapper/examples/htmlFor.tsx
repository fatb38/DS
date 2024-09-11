import {KitSpace} from '@kit/Layout/';
import {KitInput, KitInputWrapper} from '@kit/DataEntry/';

const App = () => (
    <KitSpace direction="vertical" size="l">
        <KitInputWrapper label="label" helper="helper" htmlFor="custom-input">
            <input type="text" id="custom-input" />
        </KitInputWrapper>
        <KitInput label="label" helper="helper" htmlFor="wrapped-input" />
    </KitSpace>
);

export default App;
