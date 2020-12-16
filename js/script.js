
//document.querySelectorAll("img").length-2
function showContent() {
    var e = document.getElementsByTagName("template")[0].content.cloneNode(true);
    document.body.appendChild(e)
}
showContent(), window.addEventListener("scroll", function() {
    document.documentElement.getBoundingClientRect().bottom < 3* document.documentElement.clientHeight && showContent()
});