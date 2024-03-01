import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);

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
                    <KitRate key={color} defaultValue={3} color={color} />
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>RGB(A) format</KitTypography.Text>
            <KitSpace size="m">
                <KitRate defaultValue={3} color="rgb(252, 186, 3)" />
                <KitRate defaultValue={3} color="rgb(0, 29, 117)" />
                <KitRate defaultValue={3} color="rgba(133, 0, 101, 1)" />
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HEX format</KitTypography.Text>
            <KitSpace size="m">
                <KitRate defaultValue={3} color="#FunctionComponentba03" />
                <KitRate defaultValue={3} color="#001d75" />
                <KitRate defaultValue={3} color="#850065" />
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HSL(A) format</KitTypography.Text>
            <KitSpace size="m">
                <KitRate defaultValue={3} color="hsl(44, 97%, 50%)" />
                <KitRate defaultValue={3} color="hsl(225, 100%, 23%)" />
                <KitRate defaultValue={3} color="hsla(314, 100%, 26%, 1)" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
