<div align="center">
    <img src="public/images/logo-aristid.png" alt="Logo" height="100px">
    <p align="center">
        ARiSTiD design system documentation.
        <br />
        <br />
        <a href="https://storybook.aristid.com/?path=/docs/introduction-wip--docs">View Demo</a>
        ·
        <a href="https://gitlab.aristid.com/dev/design-system/-/issues">Report Bug</a>
        ·
        <a href="https://gitlab.aristid.com/dev/design-system/-/issues">Request Feature</a>
    </p>
</div>

<br/>
<hr>
<details open>
    <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
                <li>
                    <a href="#prerequisites">Prerequisites</a>
                </li>
                <li>
                    <a href="#installation">Installation</a>
                </li>
                <li>
                    <a href="#usage-in-a-project">Usage in a project</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#development">Development</a>
            <ul>
                <li>
                    <a href="#code-structure">Code structure</a>
                </li>
                <li>
                    <a href="#creating-a-component">Creating a component</a>
                    <ul>
                        <li>
                            <a href="#component-code">Component code</a>
                        </li>
                        <li>
                            <a href="#component-documentation">Component documentation</a>
                        </li>
                    </ul>
                </li>
                </li>
            </ul>
        </li>
        <li>
            <a href="#contributing">Contributing</a>
            <ul>
                <li>
                    <a href="#commit">Commit</a>
                </li>
                <li>
                    <a href="#gitflow">Gitflow</a>
                    <ul>
                        <li>
                            <a href="#feature">Feature</a>
                        </li>
                        <li>
                            <a href="#release">Release</a>
                        </li>
                        <li>
                            <a href="#hotfix">Hotfix</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
</details>
<hr>
<br/>
<br/>

## Getting Started
### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install yarn -g
  ```
<br/>

### Installation

1. Create a folder for this repo
   ```sh
   mkdir DESIGN-SYSTEM
   ```

2. Clone the repo
   ```sh
   git clone https://gitlab.aristid.com/dev/design-system.git
   ```

3. Install requiered packages
   ```sh
   yarn install
   ```

6. Start the application
    ```sh
    yarn start
    ```

7. Once the installation is complete, you can access to the application at http://localhost:6006.

<br/>

### Usage in a project

    ⚠️ TODO :
    - How to import
    - How to use
    - How to use KitApp ?
    - Internationalization / themes (?)

<br/>

## Development

### Code structure

<ol>
    <li>📁 .storybook (💡 Configuration files of Storybook)</li>
    <li>
        📁 src (💡 Design system code)
        <ul>
            <li>
                📁 fonts
            </li>
            <li>
                📁 icons (💡 Custom icons components)
            </li>
            <li>
                📁 Kit (💡 Components are in this folder and follow the same structure as in "stories/02-Design System/")
                <ul>
                    <li>
                        📁 App
                    </li>
                    <li>
                        📁 DataDisplay
                    </li>
                    <li>
                        📁 DataEntry
                    </li>
                    <li>
                        📁 Feedback
                    </li>
                    <li>
                        📁 General
                    </li>
                    <li>
                        📁 Layout
                    </li>
                    <li>
                        📁 Navigation
                    </li>
                </ul>
            </li>
            <li>
                📁 theme (💡 Theme variables declaration)
            </li>
            <li>
                index.tsx (💡 Components export)
            </li>
            <li>
                vite-env.d.ts
            </li>
        </ul>
    </li>
    <li>
        📁 stories (💡 Storybook documentation)
        <ul>
            <li>📁 01-Design</li>
            <li>
                📁 02-Design System (💡 Components documentation are in this folder)
                <ul>
                    <li>
                        📁 01-General
                    </li>
                    <li>
                        📁 02-Layout
                    </li>
                    <li>
                        📁 03-Navigation
                    </li>
                    <li>
                        📁 04-DataEntry
                    </li>
                    <li>
                        📁 05-DataDisplay
                    </li>
                    <li>
                        📁 06-Feedback
                    </li>
                </ul>
            </li>
            <li>📁 assets</li>
            <li>📁 Root</li>
        </ul>
    </li>
</ol>

<br/>

### Creating a component
#### Component code

1. Create a new folder for the code of your component
   ```sh
   mkdir DESIGN-SYSTEM/src/Kit/DataDisplay/Tooltip
   ```

2. In this folder create two files
   ```sh
   cd Tooltip
   touch index.tsx
   touch types.d.tsx
   ```

3. Exemple of `Tooltip/index.tsx`
   ```tsx
    import React from 'react';
    import {Tooltip as AntdTooltip} from 'antd';
    import {KitTooltipProps} from './types';

    export const KitTooltip: React.FunctionComponent<KitTooltipProps> = tooltipProps => {
        return <AntdTooltip {...tooltipProps} />;
    };

    KitTooltip.displayName = 'KitTooltip';
   ```

4. Exemple of `Tooltip/types.d.ts`
   ```tsx
    import {TooltipProps} from 'antd';
    import {HTMLAttributes} from 'react';

    type AntdTooltipTypesToOmit = 'color' | 'overlayClassName' | 'overlayStyle' | 'overlayInnerStyle';

    export interface KitTooltipProps extends Omit<TooltipProps, AntdTooltipTypesToOmit>, HTMLAttributes<HTMLDivElement> {}
   ```

5. Export your component in `/Kit/05-DataDisplay/index.tsx``
   ```tsx
   import {KitTooltip} from './Tooltip';
   ...
   export {KitTooltip};
   ```

<br/>

#### Component documentation

1. Create a new folder for the documentation of your component
   ```sh
   mkdir DESIGN-SYSTEM/stories/02-Design System/05-DataDisplay/Tooltip
   ```

2. In this folder create two files
   ```sh
   cd Tooltip
   touch Tooltip.stories.mdx
   touch data.tsx
   ```

3. Exemple of `Tooltip/data.tsx`
   ```tsx
    import React from 'react';
    import {KitTooltip} from '@kit/DataDisplay/';
    ...

    export const TooltipArgTypes = {
        title: {
            name: 'title',
            description: 'The text shown in the tooltip',
            control: {type: 'text'},
            table: {
                type: {
                    summary: 'ReactNode | () => ReactNode'
                },
                category: 'Tooltip'
            }
        },
        ...
    }

    export const Template = ({component, ...args}) => {
        return (
            <KitTooltip {...args}>
                Tooltip will show on mouse enter.
            </KitTooltip>
        );
    };
   ```

4. Exemple of `Tooltip/Tooltip.stories.mdx`
   ```mdx
    import { TooltipArgTypes, Template } from "./data";
    ...

    <Meta
        title="Design System/DataDisplay/Tooltip"
        argTypes={TooltipArgTypes}
    />

    # Tooltip
    ...

    <Canvas>
        <Story name="Tooltip">{Template.bind({})}</Story>
    </Canvas>

    <Controls story="Tooltip" />
   ```

<br/>

## Contributing

Any contributions you make are **greatly appreciated**. If you have a suggestion that would make this better, please create a pull request. You can also simply open an issue with the appropriate tag.

### Commit

Commit message must respect the following pattern :

```sh
git commit -m "type[(component)] : message"
```

The type is telling us what change or iteration is being made. We have the following types:

| Type  | Description | Exemple |
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

Exemple :

```sh
git commit -m "style(Tooltip) : Change color on hover"
```

Based on this [article](https://dev.to/hornet_daemon/git-commit-patterns-5dm7).

<br/>

### Gitflow

We use Gitflow as Git branching model for this project. We have two branches to record our project history :
- main (💡 Stores the official release history)
- develop (💡 Serves as an integration branch for features)

#### Feature

<img src="public/images/gitflow-feature.png" alt="Logo" height="250px">

##### Creating a feature branch

```sh
git flow feature start addTooltipComponent
```

Continue your work and use Git like you normally would.

##### Finishing a feature branch

```sh
git flow feature finish addTooltipComponent
```