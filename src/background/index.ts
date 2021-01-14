import { autoRefreshTest } from "../injected/autoRefresh";

console.log("This is background page!");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(tab.url);
    // if (!tab.url?.startsWith("https://www.conflictnations.com/clients")) {
    //     return "e";
    // }
    chrome.tabs.executeScript(tabId, { file: "", allFrames: true }, () => {
        console.log("callback");
    });
});
// chrome.windows.getCurrent(function (currentWindow) {
//     chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (
//         activeTabs
//     ) {
//         activeTabs.map(function (tab: any) {
//             cons
//             try {
//                 chrome.tabs.executeScript(
//                     tab.id,
//                     { code: "console.log(1)" },
//                     () => {
//                         console.log("callback");
//                     }
//                 );
//             } catch (e) {
//                 console.log("rip there was an error");
//             }
//             // chrome.tabs.executeScript(tab.id, autoRefreshTest);
//         });
//     });
// });
// Content script
window.addEventListener(
    "getChromeData",
    function (data) {
        chrome.notifications.create("", {
            title: "Just wanted to notify you",
            message: "How great it is!",
            iconUrl: "icons/extension-icon-x16.png",
            type: "basic",
        });
        // do Chrome things;
        console.log({ data }, "I got chrome data (background script)");
    },
    false
);
// setInterval(() => {
//     // alert(1);
//     chrome.notifications.create("", {
//         title: "Just wanted to notify you",
//         message: "How great it is!",
//         iconUrl: "icons/extension-icon-x16.png",
//         type: "basic",
//     });
// }, 1e3);
export default function bruh() {
    console.log("bruh");
    chrome.notifications.create("", {
        title: "Just wanted to notify you",
        message: "How great it is!",
        iconUrl: "icons/extension-icon-x16.png",
        type: "basic",
    });
}
