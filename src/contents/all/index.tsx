import "./style.scss";
import inject from "../../injected/script";
import { myWindow } from "../../types";
import { autoRefreshTest } from "../../injected/autoRefresh";

console.log("content script");
window.addEventListener("getChromeData", function (data) {
    alert("content script got chrome data");
    // do Chrome things;
    console.log({ data }, "I got chrome data (content script)");
});
window.addEventListener("message", function (event) {
    console.log("message");
    alert("content script got post message");
    // Only accept messages from same frame
    if (event.source !== window) {
        return;
    }

    var message = event.data;

    // Only accept messages that we know are ours
    if (typeof message !== "object" || message === null || !message.hello) {
        return;
    }

    chrome.runtime.sendMessage(message);
});
/*
    note that this will throw an error in the extension
    console for being unsafe but don't worry it will still run
    on the main CoN page .
*/
function injectCode(code: string): void {
    if (
        window.location.href ===
        "https://www.conflictnations.com/game.php?bust=1"
    ) {
        return;
    }
    const injectionScript = document.createElement("script");
    injectionScript.setAttribute("type", "text/javascript");
    injectionScript.innerHTML = code;
    injectionScript.addEventListener("load", () => {
        injectionScript.remove();
    });
    // eslint-disable-next-line spaced-comment
    document.head.append(injectionScript); //help me
}

// eslint-disable-next-line unicorn/no-null
chrome.storage.sync.get(null, function (storageItems) {
    // console.log({ chrome });
    // console.log({ autoRefreshTest });
    const injectString = `(${inject.toString()})(${JSON.stringify(
        storageItems
    )})`;
    console.log({ injectString });
    injectCode(injectString); // chrome.tabs.executeScript(null, autoRefreshTest);
    // console.log({ autoRefreshTest });
    console.log("after exec");
});

const injectedConfigSetter = (config: any) => {
    ((window as unknown) as myWindow).chromeStorage = config;
    console.log("setting config");
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setConfig(config: any): void {
    // console.log('setConfig called');
    injectCode(
        `(${injectedConfigSetter.toString()})(${JSON.stringify(config)})`
    );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.runtime.onMessage.addListener(function (
    request,
    _sender,
    _sendResponse
) {
    // console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
    console.log("revieced a message");
    setConfig(request);
    // if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' });
});
export default setConfig;
