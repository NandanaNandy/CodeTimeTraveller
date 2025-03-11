document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll("pre, code");
    
    codeBlocks.forEach(block => {
        let button = document.createElement("button");
        button.innerText = "⏳ Time Travel";
        button.style.cssText = "background:#007bff;color:#fff;border:none;padding:5px;cursor:pointer;margin-top:5px;";
        button.onclick = () => fetchCodeHistory(block.innerText);
        
        block.parentElement.insertBefore(button, block);
    });
});

function fetchCodeHistory(code) {
    alert("Fetching code history for:\n\n" + code.substring(0, 100) + "...");
}
