const cssStyle =
	"transform: rotate(270deg);transform-origin: top left;top: 100vh;height: 100vw;width: 100vh;position: absolute;overflow-x: scroll;overflow-y: clip;";

function rotateFromContentPage(angle) {
	const rootElement = document.documentElement;
	rootElement.classList.remove(
		"rotate-ninety",
		"rotate-one-eighty",
		"rotate-two-seventy"
	);

	switch (angle) {
		case "0":
			console.log("already reset");
			break;
		case "90":
			rootElement.classList.add("rotate-ninety");
			break;
		case "180":
			rootElement.classList.add("rotate-one-eighty");
			break;
		case "270":
			rootElement.classList.add("rotate-two-seventy");
			break;
		default:
			console.log("bad angle");
			break;
	}

	// if (angle === "0") {
	// 	console.log("already reset");
	// } else {
	// 	//parse angle
	// 	console.log("cs rotate", parseInt(angle));
	// 	// rootElement.style.cssText += cssStyle;
	// 	rootElement.classList.add("rotate-two-seventy");
	// }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	// console.log(
	// 	sender.tab
	// 		? "from a content script:" + sender.tab.url
	// 		: "from the extension"
	// );
	if (request.rotate) {
		rotateFromContentPage(request.rotate);
		sendResponse({ farewell: "goodbye" });
	}
	// return true;
});
