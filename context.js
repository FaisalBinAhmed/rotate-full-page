var title = "Rotate the whole page";
const mainContextObject = {
	id: "rotate_page",
	title: title,
	contexts: ["page"],
};

const rootContext = chrome.contextMenus.create(mainContextObject);

const ninety = {
	title: "90",
	id: "ninety",
	parentId: rootContext,
	contexts: ["page"],
	// onclick: rotateNinety,
};

const oneeighty = {
	title: "180",
	id: "oneeighty",
	parentId: rootContext,
	contexts: ["page"],
	// onclick: rotateNinety,
};

chrome.contextMenus.onClicked.addListener(showContext);
// chrome.contextMenus.

function showContext(info, tab) {
	console.log("context", info.menuItemId);
	switch (info.menuItemId) {
		case "ninety":
			rotatePage(90);
			break;
		case "oneeighty":
			rotatePage(180);
			break;
		default:
			console.log("unknown click");
			break;
	}
}

async function rotatePage(angle) {
	console.log("rotate: ", angle);
	// const rootElement = document.documentElement;
	// rootElement.style.cssText += cssStyle;
	const [tab] = await chrome.tabs.query({
		active: true,
		lastFocusedWindow: true,
	});
	console.log("tab", tab);
	if (tab) {
		const response = await chrome.tabs.sendMessage(tab.id, {
			rotate: angle.toString(),
		});
		// do something with response here, not outside the function
		console.log(response);
	}
	// 	const response = await chrome.runtime.sendMessage({ greeting: "hello" });
}

chrome.contextMenus.create(ninety);
chrome.contextMenus.create(oneeighty);
