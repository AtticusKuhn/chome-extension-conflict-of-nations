import { myWindow } from "../types";
// import autoRefresh from './autoRefresh';
/*
    rip I must have every function in 1 file unitll I figure out how to use webpack
    */
const inject = (config: any): void => {
    const Mwindow = (window as unknown) as myWindow;

    if (
        window.location.href ===
        "https://www.conflictnations.com/game.php?bust=1"
    ) {
        return;
    }
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
            if (!Mwindow.chromeStorage.gameFilter) {
                return proxy.apply(this, [].slice.call(arguments));
            }
            console.log("proxy called");
            let newA = arguments[0];
            console.log(newA.result.games);
            const newGames = newA.result.games.filter(
                (game: any) =>
                    game.properties.title ===
                    Mwindow.chromeStorage.gameFilter.toUpperCase()
            );
            console.log({ newGames });
            newA.result.games = newGames;
            const newArguments = [newA, arguments[1]];
            return proxy.apply(this, [].slice.call(newArguments));
        };
    }
    // const Mwindow /= (window as unknown) as myWindow;
    Mwindow.chromeStorage = config;
    console.log("injected");
    // console.log(hup.config.user);
    // Mwindow.hup = {
    //     aInternal: {},
    //     aListener: (val: any) => {},
    //     set a(val) {
    //         this.aInternal = val;
    //         this.aListener(val);
    //     },
    //     get a() {
    //         return this.aInternal;
    //     },
    //     registerListener: function (listener: any) {
    //         this.aListener = listener;
    //     },
    // };
    setTimeout(() => {
        console.log(Mwindow.hup); // this is the good info
        autoRefresh(config);
        gameFilter();
        // eval(`(${autoRefresh.toString()})(${JSON.stringify(config)})`);
    }, 1000);
};
export default inject;
