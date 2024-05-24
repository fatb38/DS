import React from 'react';
import {KitEmpty} from '@kit/DataDisplay';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd, faUpload} from '@fortawesome/free-solid-svg-icons';
import {KitSpace} from '@kit/Layout';

const App = () => {
    const title = (
        <KitTypography.Title level="h3">
            No folder has been found on <a>/documents/upload/</a>
        </KitTypography.Title>
    );

    const description = (
        <KitTypography.Text>
            You can perform various actions such as organizing your files, uploading new folders, and managing your
            documents.
        </KitTypography.Text>
    );

    return (
        <KitEmpty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            title={title}
            description={description}
            button={
                <KitSpace>
                    <KitButton type="secondary" icon={<FontAwesomeIcon icon={faAdd} />}>
                        Create a folder
                    </KitButton>
                    <KitButton type="primary" icon={<FontAwesomeIcon icon={faUpload} />}>
                        Import a folder
                    </KitButton>
                </KitSpace>
            }
        />
    );
};

export default App;
