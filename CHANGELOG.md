# Changelog

## [X.X.X](https://www.npmjs.com/package/aristid-ds/v/X.X.X) (202X-XX-XX)

### ✨ Features

-   **New - PageLayout:**

    -   Add PageLayout component (@Delmotte-Vincent)

-   **SideMenu:**
    -   Add `customContent` property to display a custom component depending on `open` side menu state (@philippechevieux)
-   **ItemList:**
    -   Make `idCardProps` property optional (@philippechevieux)
    -   Add `idCardSubstitute` to display a custom component (@philippechevieux)
    -   Add `checkboxAriaLabel` property because the `aria-label` of the checkbox was only based on `idCardProps` (@philippechevieux)
-   **InputWrapper:**
    -   Add `hoverable` to change border color when `bordered` is set to `true` (@philippechevieux)
    -   Add `onFocus` to trigger a given function when content is focused. Also if `bordered` is set to `true` it will change the border render (@philippechevieux)
    -   Add `htmlFor` property to link the label to the wrapped content. This property is also available for: (@philippechevieux)
        -   `AutoComplete`
        -   `DatePicker` and `RangePicker`
        -   `Input`, `Password` and `TextArea`
        -   `InputNumber`
        -   `Select`
-   **Error**
    -   Add `httpErrorCode` property to choose which error to display (@fatb38 / @renaudamsellem)
-   **Modal:**
    -   Handle `maxHeight` in modal with a scrollbar if there is too much content. (@renaudamsellem)

### 🐛 Bug Fixes

-   **Table**:
    -   Fix checkbox hidden when ellipsis is true (@renaudamsellem)

### 📚 Documentation

-   Fix design tokens page that crashed every time it was consulted (@philippechevieux)

## [9.0.0](https://www.npmjs.com/package/aristid-ds/v/9.0.0) (2024-08-28)

### 🎨 Theming

-   **⚠️ Breaking change - Update tokens and CSS variables:**

    -   Rename last part of color tokens. The color name does not appear anymore. Exemple:
        `primary.blue100` is now `primary.100`. This applies to all colors. (@evoiron)
    -   Rename utilities colors tokens: (@evoiron)
        -   Same as color tokens. Exemple: `main.mainLight` is now `main.light`(@evoiron)
        -   Rename `main.mainColor` as `main.default` (@evoiron)
        -   Rename `error.errorColor` as `error.default` (@evoiron)
        -   Rename `success.successColor` as `success.default` (@evoiron)
        -   Rename `warning.warningColor` as `warning.default` (@evoiron)
        -   Rename `shadow.shadowLight` as `shadow.light`, `shadow.shadowMedium` as `shadow.medium`,
            `shadow.shadowBlue` as `shadow.blue` (@evoiron)

    > If you use tokens or css variables in your application, we strongly recommend that you update them and prefer to use utilities.

### ✨ Features

-   **⚠️ Breaking change - Header Component:**
    -   Rename `menuCard` prop of `Header.Profile` to `profileCardProps` and change its type from `ReactNode` to `IKitIdCard` (@evoiron)
    -   Add `profileMenuCardProps` in `Header.Profile` as `IKitIdCard` (@evoiron)
    -   Add `complement` in `Header.Profile` as `ReactNode` (@evoiron)
-   **⚠️ Breaking change - Typography:**
    -   Change expected value of `size` prop. `small`, `medium` and `large` are replaced by fontSize from `fontSize1` to `fontSize7` (@philippechevieux)
    -   Remove `type` prop because it is not used anymore and has been replaced by `color` (@philippechevieux)
-   **⚠️ Breaking change - RedirectCard:**

    -   Rename `imageSrc` as `coverSrc` and `imageAlt` as `coverAlt` (@philippechevieux)
    -   Add `actions` prop to display between 1 and 3 buttons (@philippechevieux)
    -   Fix cover divider render on hover (@philippechevieux)

-   **⚠️ Breaking change - Grid Component:**

    -   Update `Grid` internal code. We have moved from the Antd Grid component to a home-made component. Please refer to the documentation for use.

-   **Dropdown:**
    -   Update border, active & selected styles (@renaudAmsellem)
    -   Add new example with custom items (@renaudAmsellem)
-   **DatePicker:**
    -   Update font used for icons (@philippechevieux)
    -   Update icons used as separator (@philippechevieux)
-   **Steps:**
    -   Update overall styles (@renaudAmsellem)
-   **Menu (Deprecated):**
    -   Deprecate Menu component
    -   Move Menu documentation to deprecated folder
-   **Button**
    -   Add `link` and `redirect` Button types (@evoiron)
    -   Deprecate `text' Button type (@evoiron)
-   **Skeleton:**
    -   Add a new component `KitSkeleton` (@Delmotte-Vincent)

## [8.0.0](https://www.npmjs.com/package/aristid-ds/v/8.0.0) (2024-07-25)

### ✨ Features

-   **⚠️ Breaking change - Tag:**
    -   Remove properties `color` and `secondaryColorInvert` (@philippechevieux)
    -   Add the following properties: (@philippechevieux)
        -   `type` _To manage Tag render_
        -   `idCardProps` _To set Tag content_
        -   `disabled`
        -   `onClick`
    -   Add the following properties for `KitTagGroup` (@philippechevieux)
        -   `othersTagType`
        -   `othersTagDisabled`
    -   > If you use Tag's, you must define its content using the `idCardProps` property.
        > Also if you use `Select` with `idCard` property please use `description` instead of `title`.
-   **⚠️ Breaking change - Divider:**
    -   Remove property `color` and update default color (@philippechevieux)
-   **⚠️ Breaking change - ItemCard:**
    -   Remove deprecated `KitItemCard` component (@philippechevieux)
-   **⚠️ Breaking change - LegacyCard:**
    -   Remove deprecated `KitLegacyCard` component (@philippechevieux)
-   **⚠️ Breaking change - Card becomes ItemCard:**
    -   Rename `Card` to `ItemCard` and update its render (@philippechevieux)
    -   > If you use `Card`, you now must import `ItemCard` and update the given properties
-   **RedirectCard:**
    -   Add new component `KitRedirectCard` (@philippechevieux)
-   **Input**:
    -   Adding new prop `readonly` (@fatb38)
-   **InputWrapper**:
    -   Update info icon (@fatb38)
    -   Adding warning and error icon (@fatb38)
    -   Adding ellipsis for too long helper label (@fatb38)
-   **TextArea**:
    -   Adding new prop `readonly` (@fatb38)
-   **Select**:
    -   Adding new prop `readonly` (@fatb38)
-   **Loader**:
    -   Add new `Loader`component (@evoiron)

### 🐛 Bug Fixes

-   **SideMenu**:
    -   Fix gap between items (@evoiron)
-   **InputWrapper**:
    -   Fix wrong button for infoIcon (@fatb38)
    -   Fix gap between label, infoIcon and actions (@fatb38)

### 🎨 Theming

-   **⚠️ Breaking change - Update tokens and css variables:**

    -   Remove the following colors: (@philippechevieux)
        -   `neutral.typography`
        -   `neutral.background`
        -   `neutral.black60`
    -   Move `secondary.mediumGrey` into `neutral.grey` (@philippechevieux)
    -   Remove `secondary.mediumGrey` (@philippechevieux)
    -   Rename `secondary.orange` as `secondary.warning` (@philippechevieux)
    -   Rename `secondary.red` as `secondary.error` (@philippechevieux)
    -   Rename `secondary.green` as `secondary.success` (@philippechevieux)
    -   Move `secondary.yellow` into `tertiary.yellow` (@philippechevieux)
    -   Move `secondary.pink` into `tertiary.pink` (@philippechevieux)
    -   Add new tokens and css variables in `utilities` (@philippechevieux)

    > If you use tokens or css variables in your application, we strongly recommend that you update them and prefer to use utilities.

## [7.2.0](https://www.npmjs.com/package/aristid-ds/v/7.2.0) (2024-06-25)

### 🐛 Bug Fixes

-   **ItemList**:
    -   Fix border (@evoiron)
-   **Input**:
    -   Fix `required`prop not passed to input element
    -   Enabled `type`property
-   **Select**:
    -   Fix select not closing automatically when selecting value in simple mode

## [7.1.0](https://www.npmjs.com/package/aristid-ds/v/7.1.0) (2024-06-14)

### 🐛 Bug Fixes

-   **Table:**
    -   Fix last children rows indentaion of first data column (@evoiron)
    -   Fix last row bottom truncated when its not a filrst level row (@evoiron)
-   **ItemList et Card**:
    -   Add `disabled`to actions (@evoiron)

## [7.0.0](https://www.npmjs.com/package/aristid-ds/v/X7.0.0) (2024-06-12)

### 🐛 Bug Fixes

-   **SideMenu:**
    -   Fix css strange behavior (@evoiron)
    -   Expose `complement`prop to SideMenuItem (@evoiron)

### ✨ Features

-   **Table:**
    -   Handle tree data and expandable rows (@renaudamsellem /@philippechevieux)

## [6.0.0](https://www.npmjs.com/package/aristid-ds/v/6.0.0) (2024-06-05)

### ✨ Features

-   **SideMenu:**
    -   Add `SideMenu` component (@evoiron)

### 🐛 Bug Fixes

-   **Collapse:**
    -   Fix border width (@evoiron)
-   **Avatar:**
    -   Fix background color for transparent images, and add box shadow to avatar group (@evoiron)
-   **Modal:**
    -   Fix modal width bug (@evoiron)
    -   Allow multiline text in modal (@evoiron)

## [5.1.0](https://www.npmjs.com/package/aristid-ds/v/5.1.0) (2024-05-24)

### 🐛 Bug Fixes

-   **Button, Icon, ItemMenu:**
    -   Fix bug in useSecureClick causing onClick not called in some cases (@evoiron)

## [5.0.0](https://www.npmjs.com/package/aristid-ds/v/5.0.0) (2024-04-24)

### ✨ Features

-   **ItemList:**
    -   Add `disabled`property (@Delmotte-Vincent)
    -   Add highlight style on component `focus` (@Delmotte-Vincent)
-   **⚠️ Breaking change - IdCard:**
    -   Change `avatar` property to `avatarProps`. `avatarProps` are `KitAvatar`'s props. (@Delmotte-Vincent)
    -   Add `disabled`property (@Delmotte-Vincent)
-   **Avatar:**
    -   Add `disabled` property (@Delmotte-Vincent)
-   **Avatar.Group:**
    -   Add `disabled` property (@Delmotte-Vincent)
-   **Header.Profile:**
    -   Add `alt` property (@philippechevieux)
-   **Error:**
    -   Add a new component `KitError` to manage error page (@P0ppoff)
-   **Table:**
    -   Add a new component `Table` to display a collection of structured data (@philippechevieux)

### 🐛 Bug Fixes

-   **Select:**
    -   Fix Select displaying option value instead of label when setting value prop (@evoiron / @renaudamsellem / @TdyP)
-   **Avatar:**
    -   Fix incorrect digram when label contains accented characters (@evoiron)
-   **Empty:**
    -   Removing console errors on svg attributes (kebab-case instead of camelCase) (@fatb38)

### 📚 Documentation

-   Add an example for searching with a Select (@philippechevieux)

## [4.0.0](https://www.npmjs.com/package/aristid-ds/v/4.0.0) (2024-03-28)

### ✨ Features

-   **Select:**
    -   Add `idCard` property to option to display a `KitIdCard` instead of the label (@philippechevieux)
-   **Avatar:**
    -   Add a new property `imageFit` to change how image will fit (@philippechevieux)

### 🐛 Bug Fixes

-   **IdCard:**
    -   Add default ellipsis to `title` and `description` (@philippechevieux)
-   Add missing exports for `useKitLocale`, `KitEmpty`, `KitIdCard`, `KitInputWrapper` and `KitSection` (@philippechevieux)
-   **DatePicker / RangePicker:**
    -   Fix calendar icon disapearing on hover when a default value is set (@evoiron)
-   **⚠️ Breaking change - ItemList:**
    -   Refactor ItemList (@P0ppoff / @Delmotte-Vincent / @renaudamsellem / @philippechevieux)
-   **Modal:**
    -   Remove use of getComputedStyle which can be time consuming in tests (@evoiron)

## [3.0.0](https://www.npmjs.com/package/aristid-ds/v/3.0.0) (2024-03-15)

### ✨ Features

-   **Empty:**
    -   Add a new component `KitEmpty` (@philippechevieux)
-   **IdCard:**
    -   Add a new component `KitIdCard` (@philippechevieux)
-   **Avatar:**
    -   Add `label` property to retrieve avatar initials from (@philippechevieux)
    -   Add `initialsMaxChars` property to set the number of initials (@philippechevieux)
-   **⚠️ Breaking change - Header:**
    -   Existing `Header` is renamed to `PageHeader` (@TdyP)
    -   `Header` component is now a totally new component (@TdyP, @evoiron)

### 🐛 Bug Fixes

-   **Button:**
    -   Add missing property `form` to `KitButton` (@evoiron)
    -   Add missing property `htmlType` to `KitButton` (@philippechevieux)
-   **Build:**
    -   Build as EsModule and commonjs module (@evoiron)

## [2.0.0](https://www.npmjs.com/package/aristid-ds/v/2.0.0) (2024-03-06)

### ✨ Features

-   **⚠️ Breaking change - Modal:** (@evoiron)
    -   update Modal Design
    -   update confirmModal Options:
        -   remove `secondLine` property
        -   rename `firstLine` to `content`
        -   add `dangerConfirm` property to show Cta Button as danger look n' feel,
        -   add `showCloseIcon` to display top tight button for closing
-   **Section:** (@Delmotte-Vincent)
    -   Add new component Section
-   **Typography:**
    -   update default typography color (@evoiron)
-   **InputWrapper:**
    -   Add 4 properties: (@evoiron)
        -   `required`: show a red asterisk right after the label
        -   `actions`: an array of items to display at the right of the label
        -   `onInfoClick`: When set, display a clickable info icon which triggers this event
        -   `infoIcon`: customise the infoIcon displayed
    -   These components now accept the 4 properties above: (@evoiron)
        -   `AutoComplete`, `Checkbox.Group`, `Radio.Group`, `ColorPicker`, `DatePicker`, `RangePicker`, `Input`, `InputNumber`, `Select`
-   **ItemList**
    -   Add `draggable` property showing an icon that indicates the item is draggable (@fatb38)
-   **Tabs:**
    -   Add `hideSeparator` prop to hide separator between tabs and content (@P0ppoff)
    -   (Style) Allow tabs center on extraContent (@P0ppoff)
    -   (Style) Reduce space between tabs and separator (@P0ppoff)

### 🐛 Bug Fixes

-   **Package**: include typescript definitions for each component in built package (@evoiron)
-   **Select:**
    -   Fix default border color (@philippechevieux)
-   **Badge:**
    -   Fix custom className bug (@evoiron)
-   **Input:**
    -   Update color of content, label, placeholder and clear icon (@TdyP)
    -   Add aria-label on clear icon to improve testability (@TdyP)
-   **InputNumber:**
    -   Update color of content, label, placeholder and clear icon (@TdyP)
-   **ColorPicker:**
    -   Update color of content, label and placeholder (@TdyP)
-   **DatePicker:**
    -   Update color of content, label and placeholder (@TdyP)

## [1.1.0](https://www.npmjs.com/package/aristid-ds/v/1.1.0) (2024-02-28)

### ✨ Features

-   **Nightly build:**
    -   publish a nightly version of the package under `next`. (@evoiron)

### 🐛 Bug Fixes

-   **AutoComplete:**

    -   Fix crashing release (@evoiron)

-   **AutoComplete:**

    -   Fix dropdown border when focused or when a status is set (@philippechevieux)

-   **Select:**

    -   Fix dropdown border when focused or when a status is set (@philippechevieux)
    -   Fix dropdown border on click on arrow (@renaudamsellem)

-   **InputWrapper:**
    -   Fix border default color (@philippechevieux)

## [1.0.1](https://www.npmjs.com/package/aristid-ds/v/1.0.1) (2024-02-26)

### 🐛 Bug Fixes

-   **Typography:**
    -   fix css error leading to application crash

## [1.0.0](https://www.npmjs.com/package/aristid-ds/v/1.0.0) (2024-02-02)

-   **⚠️ Breaking change - Button:** (@evoiron)
    -   update color Management
    -   remove design tokens
    -   remove some props : `href`, `target`, `wrapperClassName`, `wrapperStyle`, `textColor`
    -   rename props:
        -   `segmentedColor` is now `color`
        -   `segmentedactived` is now `active`
        -   `segmentedChecked` is now `checked`
    -   modify button types:
        -   add `tertiary` type
        -   remove `link` type

### ✨ Features

-   **Typography:**

    -   Add `color` prop to set color on each typography elements (@evoiron)

-   **Breadcrumb:**
    -   change `breadcrumb` design (@Delmotte-Vincent)
    -   add `icon` props in `breadcrumb` items (@Delmotte-Vincent)

## [0.13.0](https://www.npmjs.com/package/aristid-ds/v/0.13.0) (2024-02-16)

### 🐛 Bug Fixes

-   remove styled-components for improved performances. All Components impacted (@evoiron)
-   upgrade Ant to versin 5.14.1 (@evoiron)

## [0.12.0](https://www.npmjs.com/package/aristid-ds/v/0.12.0) (2024-02-02)

### ✨ Features

-   **Modal:**

    -   Add `fullscreen`option (@evoiron)

-   **⚠️ Breaking change - ItemList**
    -   Add `selected` props to display a colored border (@Delmotte-Vincent)
    -   Rename `onSelectChange` by `onSelect` (@Delmotte-Vincent)

### 🐛 Bug Fixes

-   A build option was removed by error
-   **Select**
    -   Remove unused props `suffixIcon` and adapt the documentation (@Delmotte-Vincent)
    -   Add focus state on select dropdown (@Delmotte-Vincent)
    -   Fix Ellipsed tag on select (@Delmotte-Vincent)
-   **Storybook**
    -   fix a visual bug on storybook caused by an addon (@evoiron)

### 📚 Documentation

-   New documentation page to list available design tokens (@evoiron)
-   Display each design token corresponding css variable (@evoiron)
-   Display package version number on the top right corner of Storybook (@philippechevieux)

## [0.11.0](https://www.npmjs.com/package/aristid-ds/v/0.11.0) (2024-01-24)

### ✨ Features

-   **Notification:**
    -   Add `KitNotification` component usable without using `useKitNotification` hook (@evoiron)

### 🐛 Bug Fixes

-   Fix warning at build time about potential cycling dependencies (@evoiron)
-   Remove deprecated package `react-uuid` (@evoiron)
-   Enable 3 Select options, to allow dynamic filtering of options (@evoiron)

## [0.10.0](https://www.npmjs.com/package/aristid-ds/v/0.10.0) (2024-01-19)

### ✨ Features

-   **⚠️ Breaking change - Card:**
    -   Update visual render and properties (@Delmotte-Vincent)
    -   This `Card` aim to replace actual `Card` and `ItemCard`
-   **⚠️ Breaking change - Collapse:**
    -   Update visual render (@philippechevieux)
    -   Update properties of `KitHeader` and `KitExtraHeader`
-   **Notification:**
    -   Update visual render (@evoiron, @renaudAmsellem)
-   **DataEntry components:**
    -   Update visual render of `hover` and `focus` state for all those components (@evoiron, @renaudAmsellem)
-   **Antd components:**
    -   Export all components of `Ant Design`. Those components are now available in `aristid-ds`, all prefixed by `Ant` (eg `AntLayout`) (@evoiron)
-   **Tree shaking:**
    -   All components are now tree shakable (@evoiron)

### 🚨 Tests

-   **Chromatic:**
    -   Reduce number of snapshots (Group set of visual tests) (@fatb38)

## [0.9.1](https://www.npmjs.com/package/aristid-ds/v/0.9.1) (2023-12-22)

### 🐛 Bug Fixes

-   Fix types issues in `IKitLocale` that was causing build to crash (@fatb38)

## [0.9.0](https://www.npmjs.com/package/aristid-ds/v/0.9.0) (2023-12-22)

### 🎨 Theming

-   Improve performance when using multiple `KitApp` component (@Delmotte-Vincent, @evoiron, @fatb38, @philippechevieux)
-   Replace `css-in-js` theming variables by `css variables` (@Delmotte-Vincent, @evoiron, @fatb38, @philippechevieux)

### 🤖 CI

-   Add `eslint` to CI pipeline (@evoiron)
-   Add a build to CI pipeline (@evoiron)

## [0.8.0](https://www.npmjs.com/package/aristid-ds/v/0.8.0) (2023-11-16)

### 🐛 Bug Fixes

-   **Select:**
    -   Border rendering was not good when the DropDown changed position due to insufficient space (@philippechevieux)
    -   In some cases, the last Dropdown item was not visible (@philippechevieux)
-   **Input:**
    -   Token `colors.border.hover` was not used (@philippechevieux)
-   **Alert:**
    -   Token `colors.icon.alert.info` was not set with the right value (@philippechevieux)
-   **Avatar, Badge, Tag, Rate, Icon:**
    -   Add a function to check if the color property value is valid instead of type checking. If given value is not valid then component will use its default value (@philippechevieux)

### ✨ Features

-   **Input, Password, TextArea, InputNuver, DatePicker, RangePicker, ColorPicker:**
    -   Add a new property `wrapperClassName` to target component wrapper element (@Delmotte-Vincent)
-   **Rate:**
    -   Update component render (@philippechevieux)
    -   Remove property `disabledStarTransparency` (@philippechevieux)
    -   Add optional props `defaultIcon`, `halfIcon` and `activeIcon` (@philippechevieux)
-   **🆕 Tour:**
    -   Add this brand new component (@Delmotte-Vincent)

### 🚨 Tests

-   **Chromatic:**
    -   Add tests for `DataDisplay` folder (@Delmotte-Vincent)
    -   Add tests for `DataEntry` folder (@Delmotte-Vincent)
    -   Add tests for `Layout` folder (@Delmotte-Vincent)
    -   Add tests for `General` folder (@evoiron)
    -   Add tests for `Feedback` folder (@evoiron)

### 📚 Documentation

-   Update code structure in `README.md` and remove duplicate information `Introduction.stories.mdx` (@philippechevieux)
-   Fix multiples `console.error` caused by missing property `key` in some exemple (@philippechevieux)
