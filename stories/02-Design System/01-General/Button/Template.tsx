import React from 'react';
import {KitButton} from '@kit/General/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faDownload,
    faMagnifyingGlass,
    faPowerOff,
    faRotateRight,
    faWineBottle
} from '@fortawesome/free-solid-svg-icons';
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

export const EditorTemplate: IEditorTemplate = () => (
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
            <KitButton>Secondary</KitButton>
            <KitButton disabled>Secondary(disabled)</KitButton>
            <KitButton danger>Danger Secondary</KitButton>
            <KitButton danger disabled>
                Danger Secondary(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="tertiary">Tertiary</KitButton>
            <KitButton type="tertiary" disabled>
                Tertiary(disabled)
            </KitButton>
            <KitButton type="tertiary" danger>
                Danger Tertiary
            </KitButton>
            <KitButton type="tertiary" danger disabled>
                Tertiary(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link
            </KitButton>
            <KitButton type="link" disabled icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link(disabled)
            </KitButton>
            <KitButton type="link" danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link danger
            </KitButton>
            <KitButton type="link" danger disabled icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link danger(disabled)
            </KitButton>
        </KitSpace>
        <KitSpace>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Redirect
            </KitButton>
            <KitButton type="redirect" disabled icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Redirect(disabled)
            </KitButton>
            <KitButton type="redirect" danger icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Redirect danger
            </KitButton>
            <KitButton type="redirect" danger disabled icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Redirect danger(disabled)
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
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active checked />
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
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="pink" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" active checked />
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
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" active checked />
            </KitSpace>
        </KitSpace>
    </KitSpace>
);
EditorTemplate.path = 'components.Button';
EditorTemplate.title = 'Button';
