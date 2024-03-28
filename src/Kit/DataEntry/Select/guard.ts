import {ClassicOption, IKitOption, IdCard} from './types';

export const isClassicOption = (option: IKitOption): option is ClassicOption => !option.idCard;

export const isIdCardOption = (option: IKitOption): option is IdCard => Boolean(option.idCard);
