import { websiteWindow, gameWindow, myWindow } from "../types";
import { autoRefreshTest } from "./autoRefresh";
/*
    rip I must have every function in 1 file unitll I figure out how to use webpack
    */
const inject = (config: any): void => {
    const w = window as unknown;
    const websiteWindow = w as websiteWindow;
    const gameWindow = w as gameWindow;
    const myWindow = w as myWindow;
    function autoRefresh(_config: any) {
        setInterval(() => {
            if (!websiteWindow.chromeStorage.autoRefresh) {
                return; // only execute if this setting has been enabled
            }
            const games_button = document.querySelector("#ui_open_new_games");
            if (!games_button) {
                return;
            }
            //@ts-ignore
            games_button.click();
        }, 1e3);
        console.log("auto refresh function");
    }
    function gameFilter() {
        console.log("game filter called");
        const proxy = websiteWindow.hup.model.games.Game.onSearchGamesLoaded;
        websiteWindow.hup.model.games.Game.onSearchGamesLoaded = function () {
            if (
                !websiteWindow.chromeStorage.gameFilter ||
                websiteWindow.chromeStorage.gameFilter === "none"
            ) {
                return proxy.apply(this, [].slice.call(arguments));
            }
            console.log("proxy called");
            let newA = arguments[0];
            console.log(newA.result.games);
            const newGames = newA.result.games.filter(
                (game: any) =>
                    game.properties.title ===
                        //@ts-ignore
                        Mwindow.chromeStorage.gameFilter.toUpperCase() &&
                    game.properties.openSlots >=
                        (Number(websiteWindow.chromeStorage.openSlots) || 1)
            );
            console.log({ newGames });
            newA.result.games = newGames;
            const newArguments = [newA, arguments[1]];
            return proxy.apply(this, [].slice.call(newArguments));
        };
        const proxy2 = websiteWindow.hup.WebAPI.prototype.getGlobalGames;
        websiteWindow.hup.WebAPI.prototype.getGlobalGames = function () {
            let newA = arguments[0];
            let numGames = 1000;
            let openSlots = websiteWindow.chromeStorage.openSlots || 1;
            console.log({ openSlots });
            newA.numEntriesPerPage = numGames;
            newA.openSlots = openSlots;
            const newArgs = [newA, arguments[1]];
            return proxy2.apply(this, [].slice.call(newArgs));
        };
    }
    function lastLogin() {
        console.log("last login called");
        const proxy = gameWindow.hup.ui.PlayerDetailWidget.prototype.open;
        gameWindow.hup.ui.PlayerDetailWidget.prototype.open = function () {
            if (!gameWindow.chromeStorage.lastLogin) {
                return proxy.apply(this, [].slice.call(arguments));
            }
            const player = gameWindow.hup.gameState
                .getPlayerState()
                .getPlayer(arguments[0].data);
            const lastLoginTime = player.lastLogin;

            setTimeout(() => {
                if (!document.getElementById("player_detail")) {
                    return;
                }
                const newDiv = document.createElement("div");
                newDiv.innerHTML = `
            <div class="detail_entry">
                    <div class="detail_label">
                        Last Login
                    </div>
                    <div class="sg_float_l">
                        ${new Date(
                            lastLoginTime
                        ).toLocaleTimeString()} ${new Date(
                    lastLoginTime
                ).toLocaleDateString()}
                    </div>
                </div>`;
                document
                    .getElementsByClassName("right-pane")[0]
                    .appendChild(newDiv);
            }, 1e3);
            return proxy.apply(this, [].slice.call(arguments));
        };
    }
    //@ts-ignore
    gameWindow.adminTest = function () {
        gameWindow.hup.adminActionController.canPerformAdminActions = () =>
            true;
        gameWindow.hup.config.userData.adminLevel = 2;
    };
    // const Mwindow /= (window as unknown) as myWindow;
    myWindow.chromeStorage = config;
    console.log("injected");

    autoRefreshTest(config);
    setTimeout(() => {
        console.log(myWindow.hup); // this is the good info
        autoRefresh(config);
        gameFilter();
        lastLogin();
        // window.dispatchEvent(new CustomEvent("getChromeData"));
        // window.postMessage({ hello: "world" }, "*");
    }, 1000);
};
export default inject;
