import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faPowerOff, faRotateRight} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace wrap>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} active />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} active checked />
        </KitSpace>
        <br />
        <KitSpace wrap>
            <KitSpace.Compact block>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            </KitSpace.Compact>
            <KitSpace.Compact block>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} active checked />
            </KitSpace.Compact>
        </KitSpace>
        <br />
        <KitSpace wrap>
            <KitSpace.Compact block>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
            </KitSpace.Compact>
            <KitSpace.Compact block>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} active checked />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
            </KitSpace.Compact>
            <KitSpace.Compact block>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} active checked />
            </KitSpace.Compact>
        </KitSpace>
    </KitSpace>
);

export default App;
