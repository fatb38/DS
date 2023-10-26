import React, {useMemo, useState} from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitColor, KitColorPickerProps} from '@kit/DataEntry/ColorPicker/types';
import KitRow from '@kit/Layout/Grid/Row';
import KitCol from '@kit/Layout/Grid/Col';
import {KitSpace} from '@kit/Layout';

const App = () => {
    const [colorHex, setColorHex] = useState<KitColor | string>('#1677ff');
    const [colorHsb, setColorHsb] = useState<KitColor | string>('hsb(215, 91%, 100%)');
    const [colorRgb, setColorRgb] = useState<KitColor | string>('rgb(22, 119, 255)');
    const [formatHex, setFormatHex] = useState<KitColorPickerProps['format']>('hex');
    const [formatHsb, setFormatHsb] = useState<KitColorPickerProps['format']>('hsb');
    const [formatRgb, setFormatRgb] = useState<KitColorPickerProps['format']>('rgb');

    const hexString = useMemo(() => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()), [colorHex]);

    const hsbString = useMemo(() => (typeof colorHsb === 'string' ? colorHsb : colorHsb.toHsbString()), [colorHsb]);

    const rgbString = useMemo(() => (typeof colorRgb === 'string' ? colorRgb : colorRgb.toRgbString()), [colorRgb]);

    return (
        <KitSpace direction="vertical">
            <KitRow align="middle">
                <KitSpace>
                    <KitCol>
                        <KitColorPicker
                            format={formatHex}
                            value={colorHex}
                            onChange={setColorHex}
                            onFormatChange={setFormatHex}
                        />
                    </KitCol>
                    <KitCol>
                        HEX: <span>{hexString}</span>
                    </KitCol>
                </KitSpace>
            </KitRow>
            <KitRow align="middle">
                <KitSpace>
                    <KitCol>
                        <KitColorPicker
                            format={formatHsb}
                            value={colorHsb}
                            onChange={setColorHsb}
                            onFormatChange={setFormatHsb}
                        />
                    </KitCol>
                    <KitCol>
                        HSB: <span>{hsbString}</span>
                    </KitCol>
                </KitSpace>
            </KitRow>
            <KitRow align="middle">
                <KitSpace>
                    <KitCol>
                        <KitColorPicker
                            format={formatRgb}
                            value={colorRgb}
                            onChange={setColorRgb}
                            onFormatChange={setFormatRgb}
                        />
                    </KitCol>
                    <KitCol>
                        RGB: <span>{rgbString}</span>
                    </KitCol>
                </KitSpace>
            </KitRow>
        </KitSpace>
    );
};

export default App;
