import {KitTooltip} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace>
        <KitTooltip title="prompt text">
            <KitTypography.Paragraph>Tooltip will show on mouse enter.</KitTypography.Paragraph>
        </KitTooltip>
    </KitSpace>
);

export default App;
