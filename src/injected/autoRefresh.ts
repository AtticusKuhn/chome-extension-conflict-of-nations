/* eslint-disable */

import { myWindow } from "../types";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function autoRefresh(_config: any) {
    const Mwindow = (window as unknown) as myWindow;
    if (!Mwindow.chromeStorage.autoRefresh) {
        return; // only execute if this setting has been enabled
    }
    setInterval(() => {
        const gamesButton = document.querySelector("#ui_open_new_games");
        (gamesButton as HTMLButtonElement).click();
    }, 1e3);
    // if(!window.locatio)
    console.log("auto refresh function");
}
