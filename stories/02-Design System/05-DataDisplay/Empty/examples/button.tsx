import {KitEmpty} from '@kit/DataDisplay';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitEmpty
        image={KitEmpty.ASSET_FOLDER}
        title="No Folder Found"
        description="No folder has been found. Please create a new one by clicking the button below."
        button={
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faAdd} />}>
                Create a folder
            </KitButton>
        }
    />
);

export default App;
