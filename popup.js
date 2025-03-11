document.getElementById("fetchHistory").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: fetchCodeHistory
        });
    });
});

function fetchCodeHistory() {
    alert("Fetching code history... (Feature in development)");
}
