import {KitHTMLAttributes} from '../../../types';
import {IKitAvatar} from '../Avatar/types';

export interface IKitIdCard extends KitHTMLAttributes<HTMLDivElement> {
    avatarProps?: IKitAvatar;
    size?: 'medium' | 'large';
    title?: string;
    description?: string;
    disabled?: boolean;
}
