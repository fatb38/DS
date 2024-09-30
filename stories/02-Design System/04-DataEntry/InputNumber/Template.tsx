import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitInputNumberProps} from '@kit/DataEntry/InputNumber/types';
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

const getInfoClick = ({onInfoClick}): KitInputNumberProps['onInfoClick'] | undefined => {
    switch (onInfoClick) {
        case 'log to console':
            return () => console.log('info clicked');
        case '-':
        default:
            return;
    }
};

type toOmit = 'infoIcon' | 'onInfoClick';

interface ITemplate extends Omit<KitInputNumberProps, toOmit> {
    infoIcon: string;
    onInfoClick: string;
}

export const Template = (args: KitInputNumberProps) => {
    const icon = getIcon(args as never as ITemplate);
    const onInfoClick = getInfoClick(args as never as ITemplate);
    return (
        <KitSpace direction="vertical">
            <KitInputNumber {...args} infoIcon={icon} onInfoClick={onInfoClick} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => (
    <KitSpace size="m">
        <KitInputNumber placeholder="10" />
        <KitInputNumber disabled placeholder="10" />
        <KitInputNumber status="warning" placeholder="10" />
        <KitInputNumber status="error" placeholder="10" />
    </KitSpace>
);
EditorTemplate.path = 'components.InputNumber';
EditorTemplate.title = 'InputNumber';
