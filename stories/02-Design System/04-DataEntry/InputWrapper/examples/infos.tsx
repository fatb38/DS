import {KitSpace} from '@kit/Layout/';
import {KitInputWrapper} from '@kit/DataEntry/';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const onInfoClick = () => {
    console.log('info clicked');
};

const App = () => (
    <KitSpace direction="vertical" size={24}>
        <KitInputWrapper bordered label="label" helper="helper" onInfoClick={onInfoClick}>
            <KitTypography.Text>Component to wrap with info icon</KitTypography.Text>
        </KitInputWrapper>
        <KitInputWrapper bordered disabled label="label" helper="helper" onInfoClick={onInfoClick}>
            <KitTypography.Text>Disabled Component to wrap with info icon</KitTypography.Text>
        </KitInputWrapper>
        <KitInputWrapper bordered helper="helper" onInfoClick={onInfoClick}>
            <KitTypography.Text>Component to wrap with info icon</KitTypography.Text>
        </KitInputWrapper>
        <KitInputWrapper
            bordered
            label="label"
            helper="helper"
            onInfoClick={onInfoClick}
            infoIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        >
            <KitTypography.Text>Component to wrap with custom info icon</KitTypography.Text>
        </KitInputWrapper>
    </KitSpace>
);

export default App;
