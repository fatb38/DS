import {FunctionComponent} from 'react';
import Header from './Header';
import Profile from './Profile';
import {IKitHeader, IKitHeaderProfile} from './types';

type CompoundedComponent = FunctionComponent<IKitHeader> & {
    Profile: FunctionComponent<IKitHeaderProfile>;
};

export const KitHeader = Header as unknown as CompoundedComponent;
KitHeader.Profile = Profile;
KitHeader.displayName = 'KitHeader';
