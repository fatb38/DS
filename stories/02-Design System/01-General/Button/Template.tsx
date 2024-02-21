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
                <KitButton type="tertiary">Default</KitButton>
                <KitButton type="tertiary" disabled>
                    Default(disabled)
                </KitButton>
                <KitButton type="tertiary" danger>
                    Danger Default
                </KitButton>
                <KitButton type="tertiary" danger disabled>
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
            <KitSpace wrap>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="blue"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="green"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="mediumGrey" />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="mediumGrey"
                        active
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="mediumGrey"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="orange" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="orange" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="orange"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="pink" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="pink" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="pink"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="red"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="yellow" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="yellow" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="yellow"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="grey"
                        active
                        checked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" active />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        color="black"
                        active
                        checked
                    />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Button';
EditorTemplate.title = 'Button';
