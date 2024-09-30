import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitColorPickerProps} from '@kit/DataEntry/ColorPicker/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faDownload, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const getIcon = ({infoIcon}) => {
    switch (infoIcon) {
        case 'faMagnifyingGlass':
            return <FontAwesomeIcon icon={faMagnifyingGlass} />;
        case 'faDownload':
            return <FontAwesomeIcon icon={faDownload} />;
        case 'faCircleCheck':
            return <FontAwesomeIcon icon={faCircleCheck} />;
        case '-':
        default:
            return null;
    }
};

const getInfoClick = ({onInfoClick}): KitColorPickerProps['onInfoClick'] | undefined => {
    switch (onInfoClick) {
        case 'log to console':
            return () => console.log('info clicked');
        case '-':
        default:
            return;
    }
};

type toOmit = 'infoIcon' | 'onInfoClick';

interface ITemplate extends Omit<KitColorPickerProps, toOmit> {
    infoIcon: string;
    onInfoClick: string;
}

export const Template = (args: KitColorPickerProps) => {
    const icon = getIcon(args as never as ITemplate);
    const onInfoClick = getInfoClick(args as never as ITemplate);
    return (
        <KitSpace direction="vertical">
            <KitColorPicker {...args} infoIcon={icon} onInfoClick={onInfoClick} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace direction="vertical">
        <KitSpace size="m">
            <KitColorPicker />
            <KitColorPicker showText />
        </KitSpace>
        <KitSpace size="m">
            <KitColorPicker disabled />
            <KitColorPicker disabled showText />
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.ColorPicker';
EditorTemplate.title = 'ColorPicker';
