function redirect() {
    let split = location.pathname.substring(1).split("/");
    if (split[0] == "shorts" && split[1] != undefined) location = "https://www.youtube.com/watch?v="+split[1];
}

document.addEventListener("yt-navigate-start",function(event){
    redirect();
});

redirect()