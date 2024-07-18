export const desktopWidth = 1260;
export const tabletWidth = 1000;

export function isMobile(currentWidth: number) {
  return currentWidth < tabletWidth;
}

export function isTablet(currentWidth: number) {
  return currentWidth <= desktopWidth && currentWidth >= tabletWidth;
}

export function isDesktop(currentWidth: number) {
  return currentWidth > desktopWidth;
}
