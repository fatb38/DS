import React from 'react';
import {KitIcon, KitSpace, KitTypography} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {useKitTheme} from '@theme/theme-context';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.general.colors.secondary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text style={{fontWeight: 'bold'}}>Secondary Colors</KitTypography.Text>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitSpace direction="vertical" key={color}>
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color={color} />
                        <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color={color} />
                    </KitSpace>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>RGB format</KitTypography.Text>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="rgba(252, 186, 3)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="rgba(252, 186, 3)" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="rgba(0, 29, 117)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="rgba(0, 29, 117)" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="rgba(133, 0, 101)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="rgba(133, 0, 101)" />
                </KitSpace>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HEX format</KitTypography.Text>
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
            <KitTypography.Text style={{fontWeight: 'bold'}}>HSL format</KitTypography.Text>
            <KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="#fcba03" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="#fcba03" />
                </KitSpace>
                <KitSpace direction="vertical">
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} color="hsla(225, 100%, 23%, 1)" />
                    <KitIcon icon={<FontAwesomeIcon icon={faDownload} />} on color="hsla(225, 100%, 23%, 1)" />
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
