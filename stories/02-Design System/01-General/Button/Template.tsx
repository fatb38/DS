import React from 'react';
import {KitButton} from '@kit/General/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload, faMagnifyingGlass, faPowerOff, faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import {KitSpace} from '@kit/Layout';
import {IEditorTemplate} from '../../../types';
import {IKitButton} from '@kit/General/Button/types';

const getIcon = ({icon}) => {
    switch (icon) {
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

interface ITemplate extends Omit<IKitButton, 'icon'> {
    icon: string;
}

export const Template = (args: IKitButton) => {
    const icon = getIcon(args as ITemplate);
    return (
        <KitButton {...args} icon={icon}>
            Label
        </KitButton>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitButton type="primary">Primary</KitButton>
                <KitButton type="primary" disabled>
                    Primary(disabled)
                </KitButton>
                <KitButton danger type="primary">
                    Danger Text
                </KitButton>
                <KitButton danger type="primary" disabled>
                    Danger Text(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton>Default</KitButton>
                <KitButton disabled>Default(disabled)</KitButton>
                <KitButton danger>Danger Default</KitButton>
                <KitButton danger disabled>
                    Danger Default(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="text">Text</KitButton>
                <KitButton type="text" disabled>
                    Text(disabled)
                </KitButton>
                <KitButton type="text" danger>
                    Text danger
                </KitButton>
                <KitButton type="text" danger disabled>
                    Text danger(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="link">Link</KitButton>
                <KitButton type="link" disabled>
                    Link(disabled)
                </KitButton>
                <KitButton type="link" danger>
                    Danger Link
                </KitButton>
                <KitButton type="link" danger disabled>
                    Danger Link(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Search
                </KitButton>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} disabled />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} disabled>
                    Search
                </KitButton>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
                    Search
                </KitButton>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger disabled />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger disabled>
                    Search
                </KitButton>
            </KitSpace>
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedActived />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        segmentedActived
                        segmentedChecked
                    />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faRotateRight} />}
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace.Compact>
            </KitSpace>
            <KitSpace wrap>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="blue" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="blue"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="blue"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="green" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="green"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="green"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="mediumGrey"
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="mediumGrey"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="mediumGrey"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="orange" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="orange"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="orange"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="pink" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="pink"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="pink"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="red" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="red"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="red"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="yellow" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="yellow"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        segmentedColor="yellow"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Button';
EditorTemplate.title = 'Button';
