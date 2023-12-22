import React from 'react';
import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text style={{fontWeight: 'bold'}}>Default color</KitTypography.Text>
            <KitSpace>
                <KitTag>Default</KitTag>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>Secondary Colors</KitTypography.Text>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitTag color={color} key={color + '_default'}>
                        {color}
                    </KitTag>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>Inverted Secondary Colors</KitTypography.Text>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitTag color={color} key={color + '_inverted'} secondaryColorInvert>
                        {color}
                    </KitTag>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>RGB(A) format</KitTypography.Text>
            <KitSpace>
                <KitTag color="rgb(252, 186, 3)">Yellow</KitTag>
                <KitTag color="rgb(0, 29, 117)">Dark blue</KitTag>
                <KitTag color="rgba(133, 0, 101, 1)">Purple</KitTag>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HEX format</KitTypography.Text>
            <KitSpace>
                <KitTag color="#fcba03">Yellow</KitTag>
                <KitTag color="#001d75">Dark blue</KitTag>
                <KitTag color="#850065">Purple</KitTag>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HSL(A) format</KitTypography.Text>
            <KitSpace>
                <KitTag color="hsl(44, 97%, 50%)">Yellow</KitTag>
                <KitTag color="hsl(225, 100%, 23%)">Dark blue</KitTag>
                <KitTag color="hsla(314, 100%, 26%, 1)">Purple</KitTag>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
