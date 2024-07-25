import {KitItemCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => (
    <KitSpace direction="vertical" size="l">
        <KitSpace direction="vertical">
            <KitTypography.Text strong>ItemCard (card)</KitTypography.Text>
            <KitItemCard
                title="Fromage Boursin ail et fines herbes - Format 150g"
                description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
            />
        </KitSpace>
        <KitSpace direction="vertical">
            <KitTypography.Text strong>ItemCard (list)</KitTypography.Text>
            <KitItemCard
                display="list"
                title="Fromage Boursin ail et fines herbes - Format 150g"
                description="Retrouvez le goût de Boursin® dans une texture délicieusement onctueuse et légère."
            />
        </KitSpace>
    </KitSpace>
);

export default App;
