import {KitInput} from '@kit/DataEntry/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <KitSpace direction="vertical">
        <KitDivider orientation="left">Input</KitDivider>
        <KitSpace align="start">
            <KitInput placeholder="Input warning" status="warning" />
            <KitInput placeholder="Input error" status="error" />
        </KitSpace>
        <KitDivider orientation="left">Input with prefix and/or suffix</KitDivider>
        <KitSpace>
            <KitSpace direction="vertical">
                <KitInput placeholder="Prefix & warning" prefix={<FontAwesomeIcon icon={faUser} />} status="warning" />
                <KitInput placeholder="Prefix & error" prefix={<FontAwesomeIcon icon={faUser} />} status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput placeholder="Suffix & warning" suffix={<FontAwesomeIcon icon={faUser} />} status="warning" />
                <KitInput placeholder="Suffix & error" suffix={<FontAwesomeIcon icon={faUser} />} status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput
                    placeholder="Prefix & Suffix & warning"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                    status="warning"
                />
                <KitInput
                    placeholder="Prefix & Suffix & error"
                    prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    suffix={<FontAwesomeIcon icon={faUser} />}
                    status="error"
                />
            </KitSpace>
        </KitSpace>
        <KitDivider orientation="left">TextArea</KitDivider>
        <KitSpace align="start">
            <KitInput.TextArea placeholder="TextArea warning" status="warning" />
            <KitInput.TextArea placeholder="TextArea error" status="error" />
        </KitSpace>
        <KitDivider orientation="left">Password</KitDivider>
        <KitSpace>
            <KitSpace direction="vertical">
                <KitInput.Password status="warning" />
                <KitInput.Password status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} status="warning" />
                <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} status="error" />
            </KitSpace>
        </KitSpace>
        <KitDivider orientation="left">Input, TextArea and Password with showCount</KitDivider>
        <KitSpace>
            <KitSpace direction="vertical">
                <KitInput placeholder="Input showCount" showCount maxLength={20} status="warning" />
                <br />
                <KitInput placeholder="Input showCount" showCount maxLength={20} status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput.TextArea placeholder="TextArea showCount" showCount maxLength={120} status="warning" />
                <br />
                <KitInput.TextArea placeholder="TextArea showCount" showCount maxLength={120} status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitInput.Password showCount maxLength={10} status="warning" />
                <br />
                <KitInput.Password showCount maxLength={10} status="error" />
            </KitSpace>
        </KitSpace>
    </KitSpace>
);

export default App;
