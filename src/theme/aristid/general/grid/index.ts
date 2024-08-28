import {IKitGridConfig} from '@theme/types/general/grid';

export const grid: IKitGridConfig = {
    xxs: {
        width: 640,
        horizontalPadding: 16,
        columns: 4,
        noMenu: true,
        closed: {
            colGap: 8
        },
        open: {
            colGap: 8
        }
    },
    xs: {
        width: 768,
        columns: 6,
        closed: {
            colGap: 16,
            colWidth: 64
        },
        open: {
            colGap: 8,
            colWidth: 56,
            marginRight: 8
        }
    },
    s: {
        width: 992,
        columns: 6,
        closed: {
            colGap: 16,
            colWidth: 88
        },
        open: {
            colGap: 16,
            colWidth: 72,
            marginRight: 16
        }
    },
    m: {
        width: 1200,
        columns: 8,
        closed: {
            colGap: 16,
            colWidth: 88
        },
        open: {
            colGap: 16,
            colWidth: 72,
            marginRight: 16
        }
    },
    l: {
        width: 1400,
        columns: 12,
        closed: {
            colGap: 16,
            colWidth: 72
        },
        open: {
            colGap: 16,
            colWidth: 64,
            marginRight: 16
        }
    },
    xl: {
        width: 1600,
        columns: 12,
        closed: {
            colGap: 16,
            colWidth: 88
        },
        open: {
            colGap: 16,
            colWidth: 72,
            marginRight: 16
        }
    },
    xxl: {
        width: 1920,
        columns: 12,
        closed: {
            colGap: 16,
            colWidth: 96
        },
        open: {
            colGap: 16,
            colWidth: 96,
            marginRight: 16
        }
    },
    xxxl: {
        width: 1920,
        columns: 12,
        closed: {
            colGap: 16,
            colWidth: 112
        },
        open: {
            colGap: 16,
            colWidth: 96,
            marginRight: 0
        }
    }
};
