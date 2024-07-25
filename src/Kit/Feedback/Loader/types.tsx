export type IKitLoader = {
    type?: 'linear' | 'animated';
    infinite?: boolean;
    value?: number;
    className?: string;
    style?: React.CSSProperties;
};
