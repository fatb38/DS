<div align="center" className="header-block">
    <img src="https://www.aristid.com/wp-content/uploads/2021/09/logo-aristid-bleu-2.png" height="100px" alt="Aristid logo" />


ARiSTiD design system documentation.

[View Demo](https://storybook.aristid.com/?path=/docs/introduction--docs)
·
[Report Bug](https://gitlab.aristid.com/dev/design-system/-/issuess)
·
[Request Feature](https://gitlab.aristid.com/dev/design-system/-/issues)
</div>

<hr>

<details open className="toc-block">
    <summary>Table of Contents</summary>

1. [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage in a project](#usage-in-a-project)
2. [Development](#development)
    - [Code structure](#code-structure)
    - [Creating a component](#creating-a-component)
        - [Component code](#component-code)
        - [Component Theming](#component-theming)
        - [Component documentation](#component-documentation)
    - [Important](#important)
2. [Contributing](#contributing)
    - [Commit](#commit)
    - [Gitflow](#gitflow)
        - [Feature](#feature)
        - [Release](#release)
        - [Hotfix](#hotfix)
</details>
<hr>

## Getting Started
### Prerequisites

* npm

```sh dark
npm install npm@latest -g
```

* yarn

```sh dark
npm install yarn -g
```
<br/>

### Installation

1. Create a folder for this repo

```sh dark
mkdir DESIGN-SYSTEM
```

2. Clone the repo

```sh dark
git clone https://gitlab.aristid.com/dev/design-system.git
```

3. Install requiered packages

```sh dark
yarn install
```

6. Start the application

```sh dark
yarn storybook
```

7. Once the installation is complete, you can access to the application at http://localhost:6006.

<br/>

### Usage in a project

1. How To Import
```sh dark
yarn add aristid-ds
```

```sh dark
npm install aristid-ds
```

2. How to use KitApp

The **KitApp** is an essential context for the proper functioning of the **design system** components.

The kitApp is mainly used to supply the various components with **style** and **translation** overloads. By default KitApp provides **Aristid Theme** but you can override to customize every component with theme tokens.

> If you don't use KitApp, you'll get **missing styles / translation** and **errors** when using components.

```jsx dark
import {KitApp} from "aristid-ds";

<KitApp>
    <App />
</KitApp>
```

3. Usage

All components are exported directly from 'aristid-ds' package.

```jsx dark
import {KitButton, Kitcheckbox} from "aristid-ds";
```

4. Theme
You can override default theme by passing a theme configuration to the props `theme` of `KitApp`. All tokens are available in the documentation of each components in the section `Design Tokens`. Your theme configuration can be ease by using the **Theme Editor** available in the storybook. You can `edit` and `export` a **ready to use** configuration.

5. Internationalization
You can override default translation by passing translation configuration to the props `locale`of the `KitApp`. Major part of tokens are override by antd [cf Antd translation documentation](https://ant.design/docs/react/i18n) and the other part is design system tokens. You can fin them in the section `Translation Tokens` of each components.

<br/>

## Development

### Code structure


1. 📁 .storybook (💡 Configuration files of Storybook)
2. 📁 src (💡 Design system code)
    - 📁 fonts
    - 📁 icons (💡 Custom icons components)
    -  📁 Kit (💡 Components are in this folder and follow the same structure as in "stories/02-Design System/")
        - 📁 App
        - 📁 DataDisplay
        - 📁 DataEntry
        - 📁 Feedback
        - 📁 General
        - 📁 Layout
    -  📁 theme (💡 Theme variables declaration)
    - index.tsx (💡 Components export)
    -  vite-env.d.ts
3. 📁 stories (💡 Storybook documentation)
    - 📁 01-Design
    - 📁 02-Design System (💡 Components documentation are in this folder)
        - 📁 01-General
        - 📁 02-Layout
        - 📁 03-Navigation
        - 📁 04-DataEntry
        - 📁 05-DataDisplay
        - 📁 06-Feedback
    - 📁 assets
    - 📁 Root
<br/>

### Creating a component
#### Component code

1. Create a new folder for the code of your component

```sh dark
mkdir DESIGN-SYSTEM/src/Kit/DataDisplay/Tooltip
```

2. In this folder create two files

```sh dark
cd Tooltip
touch index.tsx
touch types.d.ts
```

3. Example of `Tooltip/index.tsx`

```tsx dark
import React from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import {IKitTooltip} from './types';

export const KitTooltip: React.FunctionComponent<IKitTooltip> = tooltipProps => {
    return <AntdTooltip {...tooltipProps} />;
};

KitTooltip.displayName = 'KitTooltip';
```

4. Example of `Tooltip/types.d.ts`

```tsx dark
import {TooltipProps} from 'antd';
import {HTMLAttributes} from 'react';

type AntdTooltipTypesToOmit = 'color' | 'overlayClassName' | 'overlayStyle' | 'overlayInnerStyle';

export interface IKitTooltip extends Omit<TooltipProps, AntdTooltipTypesToOmit>, HTMLAttributes<HTMLDivElement> {}
```

5. Export your component in `/Kit/05-DataDisplay/index.tsx`

```tsx dark
import {KitTooltip} from './Tooltip';
...
export {KitTooltip};
```

<br/>

### Component Theming
Every components **style** of the design system can be **override** by tokens. 

1. **Create a token file type**
    The `theme`folder is structure as same as the Kit folder.
    <br/>

    ```sh dark
    mkdir DESIGN-SYSTEM/src/theme/type/components/DataDisplay/tooltip
    ```

    <br/> 
    In this file, you have all the tokens type definition. The tokens follow some rules you can find here [TODO]

2. **Create a token file**
    The token file is the definition of all tokens with their value. It exports a function that create the theme for the cmponent. You define this file in the `aristid` that is the default theme of the design system.

    ```sh dark
    mkdir DESIGN-SYSTEM/src/theme/aristid/components/DataDisplay/tooltip
    ```

3. **Global theme type**
    After that, go to file `src/theme/type/index.tsx`to add your component type. This files contains all components that can be override.

4. **Global theme**
    You can now add your component in the `src/theme/aristid/index.tsx`  and you add your component and the function that creates tokens defined in point 2.

5. **Component Antd mapper**
    As we use both `antd` and `design system` tokens, we normalize all token to follow a same model. If your component uses antd tokens, you have to add a mapper in the `src/theme/utils/tokens-mapper` folder. This folder as the same folder structure as the rest of the application.

    <br/>
    Example of component mapper :

    ```tsx
    // utils/tokens-mapper/DataDisplay/Tag

    import {IKitTagTheme} from '@theme/types/components/DataDisplay/Tag';

    export const mapTagKitTokenToAntdToken = (kitTagTheme: IKitTagTheme) => {
        const {colors, border} = kitTagTheme;

        return {
            defaultBg: colors.default.background.default,
            defaultColor: colors.default.typography.default,
            borderRadiusSM: border.radius
        };
    };
    ```

6. **Global theme mapper**
    After that, you have to add your component mapper to the global mapper in the file `src/theme/utils/tokens-mapper/index.tsx`.

7. **Theme consumption**
    You can use the theme in your styled component by calling the hook `useKitTheme`. You can get the component theme by calling `theme.components.Tooltip`.

    </br>

    ```tsx
    const {theme} = useKitTheme();

    const tooltipTheme = theme.components.Tooltip;

    return <KitTooltip $theme={tooltipTheme} />;
    ```

<br/>

#### Component documentation

1. **Copy - Paste the template folder (stories/template)**
    This folder contains all required files to create component documentation.
    - `examples` : contains all the code of examples, index.tsx export all examples in the convenient format.
    - `data.tsx`: contains the API data (Args, Template, ...)
    - `Component.mdx` : file that contains the component documentation (usage / examples / api / tokens)
    - `Component.stories.tsx` : file use by storybook as a story to test and display.

</br>

2. **Implement examples**
    Create all examples needed in the documentation.

    ```tsx
    // basic.tsx
    import React from 'react';

    const App = () => {
        return (
            <KitTooltip title"this is an example">
                <div>Template Example</div>
            </KitTooltip>
        );
    };

    export default App;
    ```

</br>

3. **Export examples**
    You have to export all of your examples in the index.tsx of the examples folder. It permits to export all files in the convenient format to be read by the custom canvas component.

    ```tsx
    import Basic from './basic';

    import BasicSource from './basic?raw';

    export const Sources = {
        Basic: BasicSource
    };
    export default {
        Basic
    };
    ```

</br>

4. **Modify Component.mdx**
    - Rename Component in the file name by your component name (ex : Tooltip.mdx).
    - Rename Component in the file by your component name.
    - Complete all examples you want to display in documentation.

    ```tsx
    // Tooltip.mdx
    import { Meta, Story, Canvas } from "@storybook/addon-docs";
    import { Controls } from "@storybook/addon-docs";
    import { argTypes, Template } from "./data";
    import Examples, { Sources } from './examples';
    import CustomCanvas from '../../../../.storybook/components/CustomCanvas.jsx';
    import DesignTokens from '../../.storybook/components/DesignTokens';
    import fields from '../tokens';
    import * as Tooltip from './Tooltip.stories';

    <Meta of={Tooltip} />

    # Tooltip

    Brief component description.

    ## Examples

    ##### Basic
    Example description

    <CustomCanvas content={Examples.Basic} source={Sources.Basic} id="tooltip-basic"/>

    ## Api

    <Canvas of={Tooltip.Api} />

    <Controls of={Tooltip.Api} />

    ## Design Tokens

    <DesignTokens path="components.Tooltip" tokens={fields?.components?.Tooltip} />
    ```

</br>

5. **Modify Component.stories.tsx**
    - Rename Component in the file name by your component name (ex : Tooltip.stories.tsx).
    - Rename the meta object title attribute by the pass of the component (ex : title: 'Design System/DataDisplay/Tooltip'). The path specify where the component will be placed in the storybook.
    - Replace KitComponent by your component (ex KitTooltip).

    </br>

    ```tsx
    // Tooltip.stories.tsx
    import type {Meta, StoryObj} from '@storybook/react';
    import {KitTooltip} from '@components/DataDisplay';
    import {argTypes, Template} from './data';

    const meta: Meta<typeof KitTooltip> = {
        component: KitTooltip,
        title: 'Design System/DataDisplay/Tooltip',
        argTypes: argTypes
    };

    export default meta;
    type Story = StoryObj<typeof KitTooltip>;

    export const Api: Story = {
        render: Template
    };
    ```

6. **Import Component Theme Editor Template**
    In the `data.tsx` file, you defined a `EditorTemplate`. It permits to modify in live all tokens and get a preview of the component. You have to import this Editor in the `stories/index.tsx`and add it inside the object that contains all theme editor that already exist.

    ```tsx
    import {EditorTemplate as Tooltip} from './02-Design System/05-DataDisplay/Tooltip/data';

    export default {
        ...
        DataDisplay: {
            ...
            Tooltip
            ...
        }
        ...
    }

    ```

7. **Design tokens generation**
    When everything is setup, you have to run the tokens-generator script to generate all design tokens in the documentation.

    ```sh
    node tokens-generator.js
    ```

    After the script run, section `Design Tokens` documentation is up to date with all design tokens.



## Important
Every import of antd library should pass by `antd` or `/lib/antd`. `es` import will lead to issues in the build process.

## Contributing

Any contributions you make are **greatly appreciated**. If you have a suggestion that would make this better, please create a pull request. You can also simply open an issue with the appropriate tag to report a bug or inconsistencies in documentation.

### Commit

Commit message must respect the following pattern :

```sh
git commit -m "type[(component)] : message"
```

The type is telling us what change or iteration is being made. We have the following types:

| Type  | Description | Example |
|---|---|---|
| test | indicates any type of creation or alteration of test codes | Creation of unit tests |
| feat | indicates the development of a new feature for the project. | Adding a service, functionality, endpoint, etc |
| refactor | used when there is a code refactoring that does not have any impact on the system logic/rules | Code changes after a code review |
| style | used when there are code formatting and style changes that do not change the system in any way | Change the style-guide, change the lint convention, fix indentations, remove white spaces, remove comments, etc… | 
| fix | used when correcting errors that are generating bugs in the system | Apply a handling for a function that is not behaving as expected and returning an error |
| chore | indicates changes to the project that do not affect the system or test files. These are developmental changes | Change rules for eslint, add prettier, add more file extensions to .gitignore |
| docs | used when there are changes in the project documentation | add information in the API documentation, change the README, etc |
| build | used to indicate changes that affect the project build process or external dependencies | add/remove npm dependencies, etc… |
| perf | indicates a change that improved system performance | change ForEach to While, etc… |
| ci | used for changes in CI configuration files | Circle, Travis, BrowserStack, etc… |
| revert | indicates the reversal of a previous commit |


Example :

```sh
git commit -m "style(Tooltip) : Change color on hover"
```

📚 Based on this [article](https://dev.to/hornet_daemon/git-commit-patterns-5dm7).

<br/>

### Gitflow

We use Gitflow as Git branching model for this project. We have two branches to record our project history :
- main (💡 Stores the official release history)
- develop (💡 Serves as an integration branch for features)

📚 Based on this [article](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

#### Feature

<img src="public/images/gitflow-feature.png" alt="Logo" height="250px">

Creating a feature branch

```sh
git flow feature start addTooltipComponent
```

Continue your work and use Git like you normally would.

Finishing a feature branch

```sh
git flow feature finish addTooltipComponent
```

#### Release

<img src="public/images/gitflow-release.png" alt="Logo" height="250px">

Creating a release

```sh
git flow release start 0.1.0
```

⚠️ - Don't forget to update the version number in `package.json`

Finishing a release

```sh
git flow release finish '0.1.0'
```

#### Hotfix

<img src="public/images/gitflow-hotfix.png" alt="Logo" height="250px">

Creating a release

```sh
git flow hotfix start fixTooltip
```

Finishing a release

```sh
git flow hotfix finish fixTooltip
```