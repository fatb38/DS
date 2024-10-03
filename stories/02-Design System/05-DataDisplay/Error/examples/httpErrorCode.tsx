import {KitError} from '@kit/DataDisplay';
import {KitSelect} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import type {KitHttpErrorCode} from '@kit/DataDisplay/Error/types';
import KitParagraph from '@kit/General/Typography/Paragraph';
import {useState} from 'react';

const httpErrorCodeOptions = ['401', '403', '404', '500', '502', '503'].map(code => ({
    value: code,
    label: code
}));

const App = () => {
    const [httpErrorCode, setHttpErrorCode] = useState<KitHttpErrorCode>();

    return (
        <>
            <KitSpace>
                <KitParagraph>Change error code:</KitParagraph>
                <KitSelect
                    options={httpErrorCodeOptions}
                    defaultValue={httpErrorCode}
                    onChange={(value: KitHttpErrorCode) => setHttpErrorCode(value)}
                />
            </KitSpace>
            <KitError
                title="Error"
                description={<KitParagraph>This page is in error</KitParagraph>}
                httpErrorCode={httpErrorCode}
            />
        </>
    );
};

export default App;
