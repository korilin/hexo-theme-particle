
var homeInfo = document.getElementById("home-info");

homeInfo.addEventListener('click', function () {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
    });
})


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
    if (newLocal >= window.innerHeight - 80)
        menu.className += " menu-color"
    if (newLocal <= 400) {
        home_posts.style = "top:-" + newLocal / 5 + "px"
    } else {
        home_posts.style = "top:-80px"
    }
    barLocal = newLocal
})

var footer = document.getElementById("footer");
var postsHeight = document.getElementById("home-posts-wrap").offsetHeight
var headHeight = window.innerHeight
var footerLocation = postsHeight + headHeight;
footer.style = "top:" + footerLocation + "px"
