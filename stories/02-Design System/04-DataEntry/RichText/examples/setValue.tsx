import {KitRichText} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {useState} from 'react';
import {KitButton, KitTypography} from '@kit/General';

const defaultValue = '<p>Set a <strong>bold</strong> and <u>underline</u> text value</p>';
const customValue = '<p>Set a <strong>custom value</strong></p>';

const App = () => {
    const [value, setValue] = useState(defaultValue);

    return (
        <KitSpace direction="vertical" style={{width: 500}}>
            <KitRichText value={value} onChange={value => setValue(value)} />
            <KitSpace direction="horizontal">
                <KitButton onClick={() => setValue(customValue)}>Set value</KitButton>
                <KitButton onClick={() => setValue(defaultValue)}>Reset</KitButton>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Title level="h4">Editor value:</KitTypography.Title>
                <KitTypography.Paragraph>{value}</KitTypography.Paragraph>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
