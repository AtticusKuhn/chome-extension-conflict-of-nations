import './style.scss';
import inject from '../../injected/script';
import { myWindow } from '../../types';

/*
    note that this will throw an error in the extension
    console for being unsafe but don't worry it will still run
    on the main CoN page .
*/
function injectCode(code: string): void {
    if (window.location.href === 'https://www.conflictnations.com/game.php?bust=1') {
        return;
    }
    const injectionScript = document.createElement('script');
    injectionScript.setAttribute('type', 'text/javascript');
    injectionScript.innerHTML = code;
    injectionScript.addEventListener('load', () => {
        injectionScript.remove();
    });
    // eslint-disable-next-line spaced-comment
    document.head.append(injectionScript); //help me
}

// eslint-disable-next-line unicorn/no-null
chrome.storage.sync.get(null, function (storageItems) {
    injectCode(`(${inject.toString()})(${JSON.stringify(storageItems)})`);
});

const injectedConfigSetter = (config: any) => {
    ((window as unknown) as myWindow).chromeStorage = config;
    console.log('setting config');
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setConfig(config: any): void {
    // console.log('setConfig called');
    injectCode(`(${injectedConfigSetter.toString()})(${JSON.stringify(config)})`);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.runtime.onMessage.addListener(function (request, _sender, _sendResponse) {
    // console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
    console.log('revieced a message');
    setConfig(request);
    // if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' });
});
export default setConfig;
