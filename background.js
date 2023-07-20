// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'getValue') {
      // Retrieve the value from chrome.storage.sync or chrome.storage.local
      chrome.storage.sync.get('dataRids', function(result) {
        var values = result.dataRids;
        sendResponse({ value: values });
      });
    
      return true; // To indicate that sendResponse will be called asynchronously
    }
  });
  