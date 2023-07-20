// Function to remove the elements
function removeElements() {
    let dataRids = ["000000"]; // Replace with your data-rid values
    for (let rid of dataRids) {
        let element = document.querySelector(`li[data-rid="${rid}"]`);
        if (element) { 
            element.remove(); 
            console.log(`Element with data-rid=${rid} removed`);
        }
    }
}

// Setup MutationObserver
let observer = new MutationObserver(removeElements);
observer.observe(document, { childList: true, subtree: true });

// Try to remove the elements immediately in case they're already present
removeElements();
