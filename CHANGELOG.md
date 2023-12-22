# Changelog

## [X.X.X](X) (202X-XX-XX)


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
