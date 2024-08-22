import {KitButton, KitSpace, KitTypography} from '@kit/index';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text weight="bold">Primary Color</KitTypography.Text>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" active checked />
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Secondary Colors</KitTypography.Text>
            {secondaryColors.map((color: string) => (
                <KitSpace wrap key={color}>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color={color} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color={color} active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color={color}
                        active
                        checked
                    />
                </KitSpace>
            ))}
            <br />
            <KitTypography.Text weight="bold">Tertiary Colors</KitTypography.Text>
            {tertiaryColors.map((color: string) => (
                <KitSpace wrap key={color}>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color={color} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color={color} active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color={color}
                        active
                        checked
                    />
                </KitSpace>
            ))}
            <br />
            <KitTypography.Text weight="bold">Neutral Colors</KitTypography.Text>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active checked />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
