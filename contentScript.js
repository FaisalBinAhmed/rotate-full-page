function rotateFromContentPage(angle) {
	const rootElement = document.documentElement;
	rootElement.classList.remove(
		"rotate-ninety",
		"rotate-one-eighty",
		"rotate-two-seventy"
	);

	switch (angle) {
		case "0":
			// console.log("already reset");
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
			// console.log("bad angle");
			break;
	}
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.rotate) {
		rotateFromContentPage(request.rotate);
	}
	// return true;
});
