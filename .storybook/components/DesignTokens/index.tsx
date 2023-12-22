import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {useKitTheme} from '../../../src/theme/useKitTheme';
import {IItem, getItemsType} from '../ThemeEditor/types';
import Row from './Row';
import SectionRow from './SectionRow';
import {getThemeData} from '../ThemeEditor/util';
import {ITokensList} from './types';

const StyleEmptyTokens = styled.div`
    font-family:
        'Nunito Sans',
        -apple-system,
        '.SFNSText-Regular',
        'San Francisco',
        BlinkMacSystemFont,
        'Segoe UI',
        'Helvetica Neue',
        Helvetica,
        Arial,
        sans-serif;
    padding: 0 10px;
    font-style: italic;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-family:
        'Nunito Sans',
        -apple-system,
        '.SFNSText-Regular',
        'San Francisco',
        BlinkMacSystemFont,
        'Segoe UI',
        'Helvetica Neue',
        Helvetica,
        Arial,
        sans-serif;

    thead {
        th {
            text-align: left;
            color: rgba(46, 52, 56, 0.75);
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 15px;
            padding-right: 15px;
            font-size: 13px;
            line-height: 20px;
        }
    }

    tbody {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 4px;

        > tr > * {
            background: #ffffff;
            border-top: 1px solid hsla(203, 50%, 30%, 0.15);
        }

        > tr {
            border-radius: 10px;

            > td:last-of-type:not(:first-of-type) {
                padding-right: 0.5rem;
                font-size: 0.7rem;
                color: rgba(0, 0, 0, 0.65);
            }
        }

        > tr:last-of-type {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        > tr:first-of-type {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        > tr:last-of-type > td:first-of-type {
            border-bottom-left-radius: 4px;
        }

        > tr:last-of-type > td:last-of-type {
            border-bottom-right-radius: 4px;
        }

        > tr:last-of-type > td {
            border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);
        }

        > tr:first-of-type > td:first-of-type {
            border-top-left-radius: 4px;
        }

        > tr:first-of-type > td:last-of-type {
            border-top-right-radius: 4px;
        }

        > tr > *:first-of-type {
            border-left: 1px solid hsla(203, 50%, 30%, 0.15);
        }

        > tr > *:last-of-type {
            border-right: 1px solid hsla(203, 50%, 30%, 0.15);
        }

        > tr:last-of-type > * {
            border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);
        }
    }
`;

const TokensList: FunctionComponent<ITokensList> = ({path, tokens}) => {
    const {theme: kitTheme} = useKitTheme();
    const theme = getThemeData(kitTheme, path);

    const _getItems: getItemsType = (node, nodeName, level, themeValue, childrenOnly) => {
        const properties = Object.keys(node).filter(key => !key.startsWith('_'));
        const value = (themeValue && themeValue[nodeName]) ?? undefined;

        if (properties.length === 0) {
            node._value = value;
            return <Row key={`${node._label} ${node._path}`} {...node} level={level} visible={childrenOnly} />;
        }

        if (childrenOnly) {
            return (
                <>
                    {properties
                        .filter(property => !(node[property] as IItem)._type)
                        .map(property => _getItems(node[property] as IItem, property, level + 1, value, false))}
                    {properties
                        .filter(property => (node[property] as IItem)._type)
                        .map(property => _getItems(node[property] as IItem, property, level + 1, value, false))}
                </>
            );
        }
        return (
            <SectionRow key={`${node._label} ${node._path}`} title={node._label} level={level} visible>
                {properties
                    .filter(property => !(node[property] as IItem)._type)
                    .map(property => _getItems(node[property] as IItem, property, level + 1, value, false))}
                {properties
                    .filter(property => (node[property] as IItem)._type)
                    .map(property => _getItems(node[property] as IItem, property, level + 1, value, false))}
            </SectionRow>
        );
    };

    if (!tokens) {
        return <StyleEmptyTokens>No design tokens available</StyleEmptyTokens>;
    }

    return (
        <StyledTable className="sb-unstyled">
            <colgroup>
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="250px" />
            </colgroup>
            <thead>
                <tr>
                    <th>Token Name</th>
                    <th>Description</th>
                    <th>type</th>
                    <th>default Value</th>
                </tr>
            </thead>
            <tbody className="docblock-argstable-body">
                {_getItems(tokens as IItem, Object.keys(theme ?? {})[0], 0, theme, true)}
            </tbody>
        </StyledTable>
    );
};

export default TokensList;
