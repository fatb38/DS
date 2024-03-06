import React, {ReactNode} from 'react';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faUser} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass, faArrowRightToBracket, faDownload} from '@fortawesome/free-solid-svg-icons';
import {IEditorTemplate} from '../../../types';
import {IKitInput, IKitTextArea} from '@kit/DataEntry/Input/types';
import {KitInput} from '@kit/DataEntry';

const getInfoIcon = ({infoIcon}) => {
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

const getInfoClick = ({onInfoClick}): IKitInput['onInfoClick'] | undefined => {
    switch (onInfoClick) {
        case 'log to console':
            return () => console.log('info clicked');
        case '-':
        default:
            return;
    }
};

type toOmit = 'infoIcon' | 'onInfoClick';

interface ITemplate extends Omit<IKitInput & IKitTextArea, toOmit> {
    infoIcon: string;
    onInfoClick: string;
    component: string;
}

const getIcon = (icon: ReactNode): ReactNode | string | undefined => {
    switch (icon) {
        case 'SearchOutlined':
            return <FontAwesomeIcon icon={faMagnifyingGlass} />;
        case 'CheckCircleOutlined':
            return <FontAwesomeIcon icon={faCircleCheck} />;
        case '':
        default:
            return null;
    }
};

const getComponent = (component: string, args: IKitInput & IKitTextArea) => {
    const prefix = getIcon(args.prefix);
    const suffix = getIcon(args.suffix);
    const icon = getInfoIcon(args as never as ITemplate);
    const onInfoClick = getInfoClick(args as never as ITemplate);

    const {Password, TextArea} = KitInput;

    switch (component) {
        case 'Password':
            return (
                <Password
                    {...args}
                    prefix={prefix}
                    suffix={suffix}
                    infoIcon={icon}
                    onInfoClick={onInfoClick}
                ></Password>
            );
        case 'TextArea':
            return <TextArea {...args} prefix={prefix as string} infoIcon={icon} onInfoClick={onInfoClick}></TextArea>;
        case 'Input':
        default:
            return (
                <KitInput
                    {...args}
                    prefix={prefix}
                    suffix={suffix}
                    infoIcon={icon}
                    onInfoClick={onInfoClick}
                ></KitInput>
            );
    }
};

export const Template = (args: IKitInput) => {
    const {component, ...props} = args as never as ITemplate;
    return <KitSpace direction="vertical">{getComponent(component, props as never)}</KitSpace>;
};

export const EditorTemplate: IEditorTemplate = () => {
    const {Password, TextArea} = KitInput;

    const inputProps = {
        placeholder: 'Placeholder',
        prefix: <FontAwesomeIcon icon={faUser} />,
        suffix: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        showCount: true
    };

    const passwordProps = {
        placeholder: 'Password',
        prefix: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        showCount: true
    };

    const textAreaProps = {
        placeholder: 'TextArea',
        showCount: true
    };

    return (
        <KitSpace size="m">
            <KitSpace direction="vertical">
                <KitInput {...inputProps} />
                <KitInput {...inputProps} disabled />
                <KitInput {...inputProps} status="warning" />
                <KitInput {...inputProps} status="error" />
            </KitSpace>
            <KitSpace direction="vertical">
                <Password {...passwordProps} />
                <Password {...passwordProps} disabled />
                <Password {...passwordProps} status="warning" />
                <Password {...passwordProps} status="error" />
            </KitSpace>
            <KitSpace direction="vertical" size="m">
                <TextArea {...textAreaProps} />
                <TextArea {...textAreaProps} disabled />
                <TextArea {...textAreaProps} status="warning" />
                <TextArea {...textAreaProps} status="error" />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Input';
EditorTemplate.title = 'Input';
