import {KitColorKeys} from '../../theme/types/general/colors';

type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;
type HSL = `hsl(${string})`;
type HSLA = `hsla(${string})`;

export type KitColorProp = RGB | RGBA | HEX | HSL | HSLA | KitColorKeys | undefined;
