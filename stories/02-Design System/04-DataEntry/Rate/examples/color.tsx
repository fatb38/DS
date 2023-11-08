import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/theme-context';
import {KitColorProp} from '@utils/functions/types';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.general.colors.secondary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text style={{fontWeight: 'bold'}}>Default color</KitTypography.Text>
            <KitSpace>
                <KitRate defaultValue={3} />
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>Secondary Colors</KitTypography.Text>
            <KitSpace size="m">
                {secondaryColors.map((color: string) => (
                    <KitRate key={color} defaultValue={3} color={color as KitColorProp} />
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>RGB format</KitTypography.Text>
            <KitSpace size="m">
                <KitRate defaultValue={3} color="rgba(252, 186, 3)" />
                <KitRate defaultValue={3} color="rgba(0, 29, 117)" />
                <KitRate defaultValue={3} color="rgba(133, 0, 101)" />
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HEX format</KitTypography.Text>
            <KitSpace size="m">
                <KitRate defaultValue={3} color="#fcba03" />
                <KitRate defaultValue={3} color="#001d75" />
                <KitRate defaultValue={3} color="#850065" />
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HSL format</KitTypography.Text>
            <KitSpace size="m">
                <KitRate defaultValue={3} color="hsla(44, 97%, 50%, 1)" />
                <KitRate defaultValue={3} color="hsla(225, 100%, 23%, 1)" />
                <KitRate defaultValue={3} color="hsla(314, 100%, 26%, 1)" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
