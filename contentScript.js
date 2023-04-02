const cssStyle =
	"transform: rotate(270deg);transform-origin: top left;top: 100vh;height: 100vw;width: 100vh;position: absolute;overflow-x: scroll;overflow-y: clip;";

function rotateFromContentPage(angle) {
	console.log("cs rotate", parseInt(angle));
	const rootElement = document.documentElement;
	rootElement.style.cssText += cssStyle;
}

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	console.log("message received", request);
// 	if (request.greeting === "hello") {
// 		// sendResponse({ farewell: "goodbye" })
// 		rotateNinety();
// 	}
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(
		sender.tab
			? "from a content script:" + sender.tab.url
			: "from the extension"
	);
	if (request.rotate) {
		rotateFromContentPage(request.rotate);
		sendResponse({ farewell: "goodbye" });
	}
	// return true;
});
