import React, {FunctionComponent, useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Unstyled} from '@storybook/addon-docs';
import {KitApp} from '../../../src/Kit/App';
import {EditorContext} from './Context';
import Component, {StyledComponentWrapper} from './Block/Component';
import {KitButton, KitSpace} from '../../../src/Kit';
import {CollapseExpandObject, IEditor, IEditorContext} from './types';
import MainHeader from './Block/MainHeader';
import {StyledLinkButton} from './Block/Field';
import {StyledSection} from './Block/Section';

const StyledTitle = styled.div`
    margin-bottom: 2rem;
    display: flex;
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
`;

const StyledH1 = styled.h1`
    display: inline;
    padding-right: 2rem !important;
    flex: 1;
    margin: 0;
`;

const Editor: FunctionComponent<IEditor> = ({components}) => {
    const {theme, setTheme} = useContext<IEditorContext>(EditorContext);
    const fileRef = useRef<HTMLInputElement>(null);
    const ref = useRef<{
        [path: string]: CollapseExpandObject;
    }>({});

    const _registerExpandCollapse = (path, collapseExpandObject) => {
        if (!ref.current) {
            ref.current = {};
        }
        ref.current[path] = collapseExpandObject;
    };

    const _handleCollapseAll = () => Object.values(ref?.current ?? []).forEach(item => item.collapse());
    const _handleExpandAll = () => {
        Object.values(ref?.current ?? []).forEach(item => item.expand());
    };

    const _handleCollapseGroup = paths => paths.forEach(path => ref?.current[path] && ref?.current[path].collapse());
    const _handleExpandGroup = paths => paths.forEach(path => ref?.current[path] && ref?.current[path].expand());

    const _downloadFile = () => {
        const link = document.createElement('a');
        const content = JSON.stringify(theme, null, 2);
        const file = new Blob([content], {type: 'application/json'});
        link.href = URL.createObjectURL(file);
        link.download = 'theme.json';
        link.click();
        URL.revokeObjectURL(link.href);
        link.remove();
    };

    const _handleImportFileClick = () => {
        if (fileRef.current) {
            fileRef.current?.click();
        }
    };

    const _importFile = () => {
        if (!fileRef.current) {
            return;
        }

        const file = fileRef?.current?.files && fileRef.current.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const contents = e.target?.result ?? '';
            setTheme(JSON.parse(contents.toString()));
        };

        reader.readAsText(file);
    };

    useEffect(() => {
        if (fileRef.current) {
            fileRef.current.addEventListener('change', _importFile);
        }
    }, [fileRef.current]);

    return (
        <>
            <StyledTitle className="sb-unstyled">
                <StyledH1>Theme Editor</StyledH1>
                <KitSpace>
                    <KitButton type="primary" onClick={_handleImportFileClick}>
                        import theme
                    </KitButton>
                    <input type="file" ref={fileRef} hidden />
                    <KitButton type="primary" onClick={_downloadFile}>
                        export theme
                    </KitButton>
                </KitSpace>
            </StyledTitle>
            <Unstyled>
                <KitApp customTheme={theme}>
                    <MainHeader>General tokens </MainHeader>
                    <Component title="General" path="general" showA11yToggle={false} />
                    <MainHeader>
                        Components
                        <StyledLinkButton onClick={_handleExpandAll}>Expand all</StyledLinkButton>
                        <StyledLinkButton onClick={_handleCollapseAll}>Collapse all</StyledLinkButton>
                    </MainHeader>
                    <StyledComponentWrapper $isOpen $container>
                        {components &&
                            Object.keys(components).map(group => {
                                let paths = Object.values(components[group]).map(item => item.path);
                                return (
                                    <Component
                                        key={group}
                                        title={group}
                                        path={group}
                                        container
                                        showA11yToggle={false}
                                        level={0}
                                        registerExpandCollapse={_registerExpandCollapse}
                                        onCollapseGroup={() => _handleCollapseGroup(paths)}
                                        onExpandGroup={() => _handleExpandGroup(paths)}
                                    >
                                        {Object.keys(components[group]).map(item => {
                                            const Item = components[group][item];
                                            return (
                                                <Component
                                                    key={item}
                                                    path={Item.path}
                                                    title={Item.title}
                                                    showA11yToggle
                                                    level={1}
                                                    registerExpandCollapse={_registerExpandCollapse}
                                                >
                                                    <Item />
                                                </Component>
                                            );
                                        })}
                                    </Component>
                                );
                            })}
                    </StyledComponentWrapper>
                </KitApp>
            </Unstyled>
        </>
    );
};

export default Editor;
