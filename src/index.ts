import MlNav from "./mlnav";
import type { BaseNavigation } from "./mlnav";

declare global {
  interface Window {
    _MLNAV_BASE_NAVIGATION: BaseNavigation
  }
}

if (window._MLNAV_BASE_NAVIGATION) {
  const mlNav = new MlNav(window._MLNAV_BASE_NAVIGATION);
  mlNav.renderNav();
}
