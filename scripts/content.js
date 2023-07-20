// Function to remove the elements
function removeElements() {
    // Send a message to the background script to retrieve the value
    chrome.runtime.sendMessage({ action: 'getValue' }, function(response) {
        var retrievedValue = response.value;
        if (retrievedValue) {
            for (let rid of retrievedValue) {
                console.log('Retrieved value from storage:', rid.value);
                let element = document.querySelector(`li[data-rid="${rid.value}"]`);
                if (element) { 
                    element.remove(); 
                    console.log(`Element with data-rid=${rid.value} removed`);
                }
            }
        }
        
    });
}
  
// Setup MutationObserver
let observer = new MutationObserver(removeElements);
observer.observe(document, { childList: true, subtree: true });

// Try to remove the elements immediately in case they're already present
removeElements();

