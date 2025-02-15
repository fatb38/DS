import {KitIcon, KitSpace, KitTypography} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text weight="bold">Primary Color</KitTypography.Text>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="primary" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="primary" />
                </KitSpace>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Secondary Colors</KitTypography.Text>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitSpace direction="vertical" key={color}>
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color} />
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color} />
                    </KitSpace>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Tertiary Colors</KitTypography.Text>
            <KitSpace>
                {tertiaryColors.map((color: string) => (
                    <KitSpace direction="vertical" key={color}>
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color} />
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color} />
                    </KitSpace>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">RGB(A) format</KitTypography.Text>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="rgb(252, 186, 3)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="rgb(252, 186, 3)" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="rgb(0, 29, 117)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="rgb(0, 29, 117)" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="rgba(133, 0, 101, 1)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="rgba(133, 0, 101, 1)" />
                </KitSpace>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">HEX format</KitTypography.Text>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="#fcba03" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="#fcba03" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="#001d75" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="#001d75" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="#850065" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="#850065" />
                </KitSpace>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">HSL(A) format</KitTypography.Text>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="hsl(44, 97%, 50%)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="hsl(44, 97%, 50%)" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="hsl(225, 100%, 23%)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="hsl(225, 100%, 23%)" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="hsla(314, 100%, 26%, 1)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="hsla(314, 100%, 26%, 1)" />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
