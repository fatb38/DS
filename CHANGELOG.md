# Changelog



## [1.0.1](https://www.npmjs.com/package/aristid-ds/v/1.0.1) (2024-02-26)
### 🐛 Bug Fixes
* **Typography:**
  * fix css error leading to application crash

## [1.0.0](https://www.npmjs.com/package/aristid-ds/v/1.0.0) (2024-02-02)
* **⚠️ Breaking change - Button:**  (@evoiron)
    * update color Management
    * remove design tokens
    * remove some props : `href`, `target`, `wrapperClassName`, `wrapperStyle`, `textColor`
    * rename props:
      * `segmentedColor` is now `color`
      * `segmentedactived` is now `active`
      * `segmentedChecked` is now `checked`
    * modify button types:
      * add `tertiary` type
      * remove `link` type

### ✨ Features
* **Typography:**
    * Add `color` prop to set color on each typography elements (@evoiron)

* **Breadcrumb:**
    * change `breadcrumb` design (@Delmotte-Vincent)
    * add `icon` props in `breadcrumb` items (@Delmotte-Vincent)

## [0.13.0](https://www.npmjs.com/package/aristid-ds/v/0.13.0) (2024-02-16)

### 🐛 Bug Fixes
* remove styled-components for improved performances. All Components impacted (@evoiron)
* upgrade Ant to versin 5.14.1 (@evoiron)


## [0.12.0](https://www.npmjs.com/package/aristid-ds/v/0.12.0) (2024-02-02)

### ✨ Features
* **Modal:**
    * Add `fullscreen`option (@evoiron)

* **⚠️ Breaking change - ItemList**
    * Add `selected` props to display a colored border (@Delmotte-Vincent)
    * Rename `onSelectChange` by `onSelect` (@Delmotte-Vincent)

### 🐛 Bug Fixes
* A build option was removed by error
* **Select**
    * Remove unused props `suffixIcon` and adapt the documentation (@Delmotte-Vincent)
    * Add focus state on select dropdown (@Delmotte-Vincent)
    * Fix Ellipsed tag on select (@Delmotte-Vincent)
* **Storybook**
  * fix a visual bug on storybook caused by an addon (@evoiron)

### 📚 Documentation
* New documentation page to list available design tokens (@evoiron)
* Display each design token corresponding css variable (@evoiron)
* Display package version number on the top right corner of Storybook (@philippechevieux)

## [0.11.0](https://www.npmjs.com/package/aristid-ds/v/0.11.0) (2024-01-24)
### ✨ Features
  * **Notification:**
      * Add `KitNotification` component usable without using `useKitNotification` hook (@evoiron)

### 🐛 Bug Fixes

* Fix warning at build time about potential cycling dependencies (@evoiron)
* Remove deprecated package `react-uuid` (@evoiron)
* Enable 3 Select options, to allow dynamic filtering of options (@evoiron)

## [0.10.0](https://www.npmjs.com/package/aristid-ds/v/0.10.0) (2024-01-19)

### ✨ Features
  * **⚠️ Breaking change - Card:**
    * Update visual render and properties (@Delmotte-Vincent)
    * This `Card` aim to replace actual `Card` and `ItemCard`
  * **⚠️ Breaking change - Collapse:**
    * Update visual render (@philippechevieux)
    * Update properties of `KitHeader` and `KitExtraHeader`
  * **Notification:**
    * Update visual render (@evoiron, @renaudAmsellem)
  * **DataEntry components:**
    * Update visual render of `hover` and `focus` state for all those components (@evoiron, @renaudAmsellem)
  * **Antd components:**
    * Export all components of `Ant Design`. Those components are now available in `aristid-ds`, all prefixed by `Ant` (eg `AntLayout`) (@evoiron)
  * **Tree shaking:**
    * All components are now tree shakable (@evoiron)

### 🚨 Tests

* **Chromatic:**
  * Reduce number of snapshots (Group set of visual tests) (@fatb38)

## [0.9.1](https://www.npmjs.com/package/aristid-ds/v/0.9.1) (2023-12-22)

### 🐛 Bug Fixes

* Fix types issues in `IKitLocale` that was causing build to crash (@fatb38)

## [0.9.0](https://www.npmjs.com/package/aristid-ds/v/0.9.0) (2023-12-22)

### 🎨 Theming

* Improve performance when using multiple `KitApp` component (@Delmotte-Vincent, @evoiron, @fatb38, @philippechevieux)
* Replace `css-in-js` theming variables by `css variables` (@Delmotte-Vincent, @evoiron, @fatb38, @philippechevieux)

### 🤖 CI

* Add `eslint` to CI pipeline (@evoiron)
* Add a build to CI pipeline (@evoiron)

## [0.8.0](https://www.npmjs.com/package/aristid-ds/v/0.8.0) (2023-11-16)

### 🐛 Bug Fixes

* **Select:**
  * Border rendering was not good when the DropDown changed position due to insufficient space (@philippechevieux)
  * In some cases, the last Dropdown item was not visible (@philippechevieux)
* **Input:**
  * Token `colors.border.hover` was not used (@philippechevieux)
* **Alert:**
  * Token `colors.icon.alert.info` was not set with the right value (@philippechevieux)
* **Avatar, Badge, Tag, Rate, Icon:**
  * Add a function to check if the color property value is valid instead of type checking. If given value is not valid then component will use its default value (@philippechevieux)

### ✨ Features

* **Input, Password, TextArea, InputNuver, DatePicker, RangePicker, ColorPicker:**
  * Add a new property `wrapperClassName` to target component wrapper element (@Delmotte-Vincent)
* **Rate:**
  * Update component render (@philippechevieux)
  * Remove property `disabledStarTransparency` (@philippechevieux)
  * Add optional props `defaultIcon`, `halfIcon` and `activeIcon` (@philippechevieux)
* **🆕 Tour:**
  * Add this brand new component (@Delmotte-Vincent)

### 🚨 Tests

* **Chromatic:**
  * Add tests for `DataDisplay` folder (@Delmotte-Vincent)
  * Add tests for `DataEntry` folder (@Delmotte-Vincent)
  * Add tests for `Layout` folder (@Delmotte-Vincent)
  * Add tests for `General` folder (@evoiron)
  * Add tests for `Feedback` folder (@evoiron)

### 📚 Documentation

* Update code structure in `README.md` and remove duplicate information `Introduction.stories.mdx` (@philippechevieux)
* Fix multiples `console.error` caused by missing property `key` in some exemple (@philippechevieux)
