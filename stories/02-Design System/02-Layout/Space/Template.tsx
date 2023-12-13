import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';
import {IKitSpace} from '@kit/Layout/Space/types';

interface ITemplate extends IKitSpace {
    compact: boolean;
}

const getContent = () => (
    <>
        <KitButton type="primary">Primary</KitButton>
        <KitButton>Default</KitButton>
    </>
);

export const Template = (args: IKitSpace) => {
    const {compact, ...props} = args as ITemplate;

    if (compact) {
        return <KitSpace.Compact {...(props as typeof KitSpace.Compact)}>{getContent()}</KitSpace.Compact>;
    }
    return <KitSpace {...props}>{getContent()}</KitSpace>;
};
