const element = document.getElementById("myBtn");
if (element) {
    element.addEventListener("click", clean);
}
function clean() {
    let text = document.getElementById("input").value;
    let cleanText = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])|\s+/g, '');
    document.getElementById("cleanText").innerHTML = "<a href=" + cleanText + " target='_blank'>" + cleanText + "</a>";
    navigator.clipboard.writeText(cleanText);
}

const cleanContextMenu = (sayfa) => {
    let text = sayfa.selectionText;
    let cleanText = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    chrome.tabs.create({ url: cleanText });
}
chrome.contextMenus.create({
    title: "Temizle",
    contexts: ["selection"],  // ContextType
    onclick: cleanContextMenu // A callback function
});