import { myWindow, gameWindow, websiteWindow } from "../types";
// import autoRefresh from './autoRefresh';
/*
    rip I must have every function in 1 file unitll I figure out how to use webpack
    */
const inject = (config: any): void => {
    const w = window as unknown;
    const Mwindow = w as myWindow;
    const GameWindow = w as gameWindow;
    const WebsiteWindow = w as websiteWindow;
    function autoRefresh(_config: any) {
        setInterval(() => {
            console.log("interval checking...");
            if (!Mwindow.chromeStorage.autoRefresh) {
                return; // only execute if this setting has been enabled
            }
            const games_button = document.querySelector("#ui_open_new_games");
            if (!games_button) {
                return;
            }
            //@ts-ignore
            games_button.click();
        }, 1e3);
        // if(!window.locatio)
        console.log("auto refresh function");
    }
    function gameFilter() {
        console.log("game filter called");
        const proxy = Mwindow.hup.model.games.Game.onSearchGamesLoaded;
        Mwindow.hup.model.games.Game.onSearchGamesLoaded = function () {
            if (
                !Mwindow.chromeStorage.gameFilter ||
                Mwindow.chromeStorage.gameFilter === "none"
            ) {
                return proxy.apply(this, [].slice.call(arguments));
            }
            console.log("proxy called");
            let newA = arguments[0];
            console.log(newA.result.games);
            const newGames = newA.result.games.filter(
                (game: any) =>
                    game.properties.title ===
                    WebsiteWindow.chromeStorage.gameFilter.toUpperCase()
            );
            console.log({ newGames });
            newA.result.games = newGames;
            const newArguments = [newA, arguments[1]];
            return proxy.apply(this, [].slice.call(newArguments));
        };
        const proxy2 = Mwindow.hup.WebAPI.prototype.getGlobalGames;
        Mwindow.hup.WebAPI.prototype.getGlobalGames = function () {
            let newA = arguments[0];
            let numGames = 1000;
            let openSlots = Mwindow.chromeStorage.openSlots || 1;
            console.log({ openSlots });
            newA.numEntriesPerPage = numGames;
            newA.openSlots = openSlots;
            const newArgs = [newA, arguments[1]];
            return proxy2.apply(this, [].slice.call(newArgs));
        };
    }
    function lastLogin() {
        console.log("last login called");
        const proxy = Mwindow.hup.ui.PlayerDetailWidget.prototype.open;
        Mwindow.hup.ui.PlayerDetailWidget.prototype.open = function () {
            if (!Mwindow.chromeStorage.lastLogin) {
                return proxy.apply(this, [].slice.call(arguments));
            }
            const player = Mwindow.hup.gameState
                .getPlayerState()
                .getPlayer(arguments[0].data);
            const lastLoginTime = player.lastLogin;

            setTimeout(() => {
                if (!document.getElementById("player_detail")) {
                    return;
                }
                //    const row=  document.querySelector("#player_detail > div.stats_right_container.clearAfter > div.right-pane > div > div > div:nth-child(2)")
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
    Mwindow.chromeStorage = config;
    console.log("injected");
    setTimeout(() => {
        console.log(Mwindow.hup); // this is the good info
        autoRefresh(config);
        gameFilter();
        lastLogin();
    }, 1000);
};
export default inject;
