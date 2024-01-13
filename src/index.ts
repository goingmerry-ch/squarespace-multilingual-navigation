import MlNav from "./mlnav";
import type { BaseNavigation, HomeNavigation } from "./mlnav";

declare global {
  interface Window {
    _MLNAV_BASE_NAVIGATION: BaseNavigation
    _MLNAV_HOME: HomeNavigation
  }
}

if (window._MLNAV_BASE_NAVIGATION) {
  const mlNav = new MlNav(window._MLNAV_BASE_NAVIGATION, window._MLNAV_HOME);
  mlNav.renderNav();
}
