export const getCssPropertyValue = (cssProperty: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(cssProperty)
}