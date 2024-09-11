import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';

const App = () => (
    <KitSpace direction="vertical" size="l">
        <KitInputWrapper
            hoverable
            label="label"
            helper="helper"
            onFocus={() => console.log('Ford focus')}
            onBlur={() => console.log('onBlur')}
        >
            <KitTypography.Text>Bordered Component to wrap</KitTypography.Text>
        </KitInputWrapper>
        <KitInputWrapper
            bordered
            hoverable
            label="label"
            helper="helper"
            onFocus={() => console.log('Ford focus')}
            onBlur={() => console.log('onBlur')}
        >
            <KitTypography.Text>Bordered Component to wrap</KitTypography.Text>
        </KitInputWrapper>
    </KitSpace>
);

export default App;
