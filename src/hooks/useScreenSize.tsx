import { useWindowWidth } from '@react-hook/window-size';

export const useScreenSize = () => {
  const width = useWindowWidth();

  const isDesktopSize = width > 1200;
  const isMobileSize = width <= 768;
  const isTabSize = width > 768 && width < 1200;
  const isOnlyBigScreen = width > 768;

  return { isDesktopSize, isMobileSize, isTabSize, isOnlyBigScreen };
};
