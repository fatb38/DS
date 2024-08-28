import {IKitCustomTheme, IKitThemeGeneral} from '@theme/types';
import {GridBreakPoint} from '@theme/types/general/grid';
import merge from 'lodash/merge';
import {FunctionComponent, PropsWithChildren, useMemo} from 'react';
import {Style} from 'react-style-tag';

const globalGridStyleId = 'aristid-ds-grid';

const getMediaQueryRule = (minWidth: number | undefined, maxWidth: number | undefined): string => {
    if (!minWidth && !maxWidth) {
        return '';
    } else if (!minWidth) {
        return `@media screen and (max-width: ${maxWidth}px)`;
    } else if (!maxWidth) {
        return `@media screen and (min-width: ${minWidth}px)`;
    } else {
        return `@media screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
    }
};

const getBreakpointRules = (params: GridBreakPoint) => {
    const closedWidth = params.closed.colWidth ?? 'auto';
    const openWidth = params.open.colWidth ?? 'auto';

    return `
        .kit-row-inner {
            grid-template-columns: repeat(${params.columns}, ${closedWidth === 'auto' ? '1fr' : `${closedWidth}px`});
            column-gap: ${params.closed.colGap}px;
            width: ${closedWidth === 'auto' ? '100%' : 'auto'};
            ${params.closed.marginRight ? `margin-right: ${params.closed.marginRight}px;` : ''}
            ${params.horizontalPadding ? `padding: 0 ${params.horizontalPadding}px` : ''}
        }
        &.kit-row-menu-open {
            .kit-row-inner {
                grid-template-columns: repeat(${params.columns}, ${openWidth === 'auto' ? '1fr' : `${openWidth}px`});
                column-gap: ${params.open.colGap}px;
                width: ${openWidth === 'auto' ? '100%' : 'auto'};
                ${params.open.marginRight ? `margin-right: ${params.open.marginRight}px;` : ''}
                ${params.horizontalPadding ? `padding: 0 ${params.horizontalPadding}px` : ''}
            }
        }
    `;
};

const GridStyle: FunctionComponent<
    PropsWithChildren<{theme: IKitThemeGeneral; customTheme?: IKitCustomTheme; id: string}>
> = ({theme, customTheme, id}) => {
    const mergedTheme = useMemo(() => merge(theme, customTheme?.general), [theme, customTheme]);

    const breakpoints = mergedTheme.breakpoints.reverse();
    const css = [
        // add css rules for fixed rows breakpoints (non mediaQueries)
        ...breakpoints.map(
            breakpoint => `
            .${id}.kit-row.kit-row-fixed.${breakpoint} {
                ${getBreakpointRules(theme.grid[breakpoint])}
            }
        `
        ),
        // add css rules for non  width > larger breakpoints
        `
            ${getMediaQueryRule(theme.grid[breakpoints[0]].width + 1, undefined)} {
                /* breakpoint: ${breakpoints[0]}*/
                .${id}.kit-row:not(.kit-row-fixed) {
                    ${getBreakpointRules(theme.grid[breakpoints[0]])}
                }
            }
        `,
        // add css rules for intermediate breakpoints breakpoints
        ...breakpoints.slice(0, -1).map(
            (breakpoint, i) => `
                ${getMediaQueryRule(theme.grid[breakpoints[i + 1]].width + 1, theme.grid[breakpoint].width)} {
                    /* breakpoint: ${breakpoint}*/
                    .${id}.kit-row:not(.kit-row-fixed) {
                        ${getBreakpointRules(theme.grid[breakpoint])}
                    }
                }
                `
        ),
        // css rules for width < smallest breakpoint
        `
            ${getMediaQueryRule(undefined, theme.grid[breakpoints[breakpoints.length - 1]].width)} {
                /* breakpoint: ${breakpoints[breakpoints.length - 1]}*/
                .${id}.kit-row:not(.kit-row-fixed) {
                    ${getBreakpointRules(theme.grid[breakpoints[breakpoints.length - 1]])}
                }
            }
        `
    ];

    return (
        <Style id={globalGridStyleId} hasSourceMap={false}>
            {css.join('')}
        </Style>
    );
};

export default GridStyle;
