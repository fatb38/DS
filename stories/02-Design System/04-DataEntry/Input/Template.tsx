import React, {ReactNode} from 'react';
import {KitColorPicker, KitDatePicker, KitInput, KitInputNumber, KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faUser} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {IEditorTemplate} from '../../../types';
import {IKitInput, IKitTextArea} from '@kit/DataEntry/Input/types';

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

    const {Password, TextArea} = KitInput;

    switch (component) {
        case 'Password':
            return <Password {...args} prefix={prefix} suffix={suffix}></Password>;
        case 'TextArea':
            return <TextArea {...args} prefix={prefix as string}></TextArea>;
        case 'Input':
        default:
            return <KitInput {...args} prefix={prefix} suffix={suffix}></KitInput>;
    }
};

type ITemplate = IKitInput & IKitTextArea & {component: string};

export const Template = (args: IKitInput) => {
    const {component, ...props} = args as ITemplate;
    return <KitSpace direction="vertical">{getComponent(component, props)}</KitSpace>;
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

export const EditorTemplateWrapper: IEditorTemplate = () => {
    const {Password, TextArea} = KitInput;
    const {RangePicker} = KitDatePicker;

    const wrapperProps = {
        label: 'Label',
        helper: 'Helper'
    };

    return (
        <KitSpace size="m" direction="vertical">
            <KitSpace direction="horizontal" size="m">
                <KitInput {...wrapperProps} placeholder="Input" />
                <KitInput {...wrapperProps} disabled placeholder="Input" />
                <KitInput {...wrapperProps} status="warning" placeholder="Input" />
                <KitInput {...wrapperProps} status="error" placeholder="Input" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <Password {...wrapperProps} placeholder="Password" />
                <Password {...wrapperProps} disabled placeholder="Password" />
                <Password {...wrapperProps} status="warning" placeholder="Password" />
                <Password {...wrapperProps} status="error" placeholder="Password" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <TextArea {...wrapperProps} placeholder="TextArea" />
                <TextArea {...wrapperProps} disabled placeholder="TextArea" />
                <TextArea {...wrapperProps} status="warning" placeholder="TextArea" />
                <TextArea {...wrapperProps} status="error" placeholder="TextArea" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitInputNumber {...wrapperProps} placeholder="Number" />
                <KitInputNumber {...wrapperProps} disabled placeholder="Number" />
                <KitInputNumber {...wrapperProps} status="warning" placeholder="Number" />
                <KitInputNumber {...wrapperProps} status="error" placeholder="Number" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitDatePicker {...wrapperProps} placeholder="DatePicker" />
                <KitDatePicker {...wrapperProps} disabled placeholder="DatePicker" />
                <KitDatePicker {...wrapperProps} status="warning" placeholder="DatePicker" />
                <KitDatePicker {...wrapperProps} status="error" placeholder="DatePicker" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <RangePicker {...wrapperProps} placeholder={['RangerPicker', 'RangePicker']} />
                <RangePicker {...wrapperProps} disabled placeholder={['RangerPicker', 'RangePicker']} />
                <RangePicker {...wrapperProps} status="warning" placeholder={['RangerPicker', 'RangePicker']} />
                <RangePicker {...wrapperProps} status="error" placeholder={['RangerPicker', 'RangePicker']} />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitSelect {...wrapperProps} placeholder="Select" />
                <KitSelect {...wrapperProps} disabled placeholder="Select" />
                <KitSelect {...wrapperProps} status="warning" placeholder="Select" />
                <KitSelect {...wrapperProps} status="error" placeholder="Select" />
            </KitSpace>
            <KitSpace direction="horizontal" size="m">
                <KitColorPicker {...wrapperProps} showText />
                <KitColorPicker {...wrapperProps} disabled showText />
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplateWrapper.path = 'components.InputWrapper';
EditorTemplateWrapper.title = 'InputWrapper';
