var barLocal = document.documentElement.scrollTop
window.addEventListener('scroll', function (e) {
    var newLocal = document.documentElement.scrollTop
    var menu = document.getElementById("menu")
    var home_posts = document.getElementById("home-posts")

    if (barLocal < newLocal) {
        menu.className = "hidden-menu"
    } else {
        menu.className = "show-menu"
    }
    if (home_posts) {

        if (newLocal <= window.innerHeight - 100)
            menu.className += " menu-color"
        if (newLocal <= 400) {
            home_posts.style = "top:-" + newLocal / 5 + "px"
        } else {
            home_posts.style = "top:-80px"
        }
    }
    barLocal = newLocal
})


hljs.initHighlightingOnLoad();
var pre_blocks = document.getElementsByTagName("pre")
for (var i = 0; i < pre_blocks.length; i++) {
    var code_block_class = pre_blocks[i].firstChild.className
    var language = code_block_class.substring(9,)
    if (language == "") language = "Text"
    var language_html = "<div class='language'>" + language + "</div>"
    pre_blocks[i].innerHTML += language_html
}

