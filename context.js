var title = "Rotate the whole page";
const mainContextObject = {
	id: "rotate_page",
	title: title,
	contexts: ["page"],
};

const rootContext = chrome.contextMenus.create(mainContextObject);

const ninety = {
	title: "Rotate 90° clockwise",
	id: "ninety",
	parentId: rootContext,
	contexts: ["page"],
};

const oneeighty = {
	title: "Rotate 180° degree",
	id: "oneeighty",
	parentId: rootContext,
	contexts: ["page"],
};
const twoseventy = {
	title: "Rotate 90° anti-clockwise",
	id: "twoseventy",
	parentId: rootContext,
	contexts: ["page"],
};
const reset = {
	title: "Reset",
	id: "reset",
	parentId: rootContext,
	contexts: ["page"],
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
		case "twoseventy":
			rotatePage(270);
			break;
		case "reset":
			rotatePage(0);
			break;
		default:
			console.log("unknown click");
			break;
	}
}

async function rotatePage(angle) {
	console.log("rotate: ", angle);
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
}

chrome.contextMenus.create(ninety);
chrome.contextMenus.create(oneeighty);
chrome.contextMenus.create(twoseventy);
chrome.contextMenus.create(reset);
