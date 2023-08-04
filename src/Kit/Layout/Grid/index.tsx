import InternalRow from "./Row";
import InternalCol from "./Col";
import { KitColProps, KitRowProps } from "./types";

type CompoundedComponent = {
    Row: React.FunctionComponent<KitRowProps>;
    Col: React.FunctionComponent<KitColProps>;
    displayName?: string;
};

export const KitGrid = ({
    Row: InternalRow,
    Col: InternalCol,
} as unknown) as CompoundedComponent;

KitGrid.displayName = "KitGrid";
