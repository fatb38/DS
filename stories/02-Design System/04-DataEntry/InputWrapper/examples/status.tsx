import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';

const App = () => (
    <KitSpace direction="vertical" size={24}>
        <KitSpace wrap size={24}>
            <KitInputWrapper label="label" helper="helper">
                <KitTypography.Text>Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper status="error" label="label" helper="helper">
                <KitTypography.Text>Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper status="warning" label="label" helper="helper">
                <KitTypography.Text>Component to wrap</KitTypography.Text>
            </KitInputWrapper>
        </KitSpace>
        <KitTypography.Title level="h4">Bordered</KitTypography.Title>
        <KitSpace wrap size={24}>
            <KitInputWrapper bordered label="label" helper="helper">
                <KitTypography.Text>Bordered Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered status="error" label="label" helper="helper">
                <KitTypography.Text>Bordered Component to wrap</KitTypography.Text>
            </KitInputWrapper>
            <KitInputWrapper bordered status="warning" label="label" helper="helper">
                <KitTypography.Text>Bordered Component to wrap</KitTypography.Text>
            </KitInputWrapper>
        </KitSpace>
    </KitSpace>
);

export default App;
