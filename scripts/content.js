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
                    // Create a new class name
                    let className = 'reset-after-' + rid.value;
                    element.classList.add(className);
                    
                    // Create a new style tag
                    let style = document.createElement('style');
                    style.innerHTML = `.${className} .cyNiRf::after { background-color: unset; border-radius: 0%; border: unset; }`;

                    // Add the style tag to the head of the document
                    document.head.appendChild(style);
                    // element.remove();
                    console.log(`Element with data-rid=${rid.value} removed`);
                }
            }
        }
        // Run this Once.
        observer.disconnect();
    });
}

// Setup MutationObserver
let observer = new MutationObserver(removeElements);
observer.observe(document, { childList: true, subtree: true });

// Try to remove the elements immediately in case they're already present
removeElements();

