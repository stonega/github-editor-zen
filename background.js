chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status == "complete") {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, { action: "github-tab-active" });
    console.log(response);
  }
});
