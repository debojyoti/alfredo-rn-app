// import { store } from "../redux/store";
// import * as _deepClone from "clone-deep";

// export const deepClone = data => {
//     return _deepClone(data);
// }

export const sleepTime = n => new Promise(r => setTimeout(() => r(), n));

export const scrollToTop = () => {window.scrollTo(0,0)};