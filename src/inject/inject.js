/////////////////////
// local variables //
/////////////////////

////////////////
// core logic //
////////////////

const launchCycle = () => {};
const abortCycle = () => {};

///////////////////////////
// window event listners //
///////////////////////////

window.addEventListener("beforeunload", () => {});

///////////////////////////
// chrome event listners //
///////////////////////////

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  switch (message.key) {
    case "check":
      sendResponse({ received: true });
      break;
    case "on":
      sendResponse({ active: true });
      console.log("toggle-on");
      launchCycle();
      break;
    case "off":
      sendResponse({ active: false });
      console.log("toggle-off");
      abortCycle();
      break;
    default:
      break;
  }
});
