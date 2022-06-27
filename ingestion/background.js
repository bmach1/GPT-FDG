let activeTabId, lastUrl, lastTitle;

var db = new PouchDB('todos');
var remoteCouch = false;

function getTabInfo(tabId) {
  chrome.tabs.get(tabId, function(tab) {
    if(lastUrl != tab.url || lastTitle != tab.title)
      console.log(lastUrl = tab.url, lastTitle = tab.title);

      chrome.storage.sync.set({key: value}, function() {
        console.log('Value is set to ' + value);
      });
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



