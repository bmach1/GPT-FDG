let activeTabId, lastUrl, lastTitle;

function getTabInfo(tabId) {
  chrome.tabs.get(tabId, function(tab) {
    if(lastUrl != tab.url || lastTitle != tab.title)
      console.log(lastUrl = tab.url, lastTitle = tab.title);
  });
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
  getTabInfo(activeTabId = activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(activeTabId == tabId) {
    getTabInfo(tabId);
  }
});


async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

});

chrome.storage.sync.set({key: value}, function() {
  console.log('Value is set to ' + value);
});

console.log(getCurrentTab())

