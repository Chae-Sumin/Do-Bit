function COMMUNITY(){
    const communityBox = document.querySelector(".community_list");
    const communityList = communityBox.children[0].children;
    const clickJumpRemove = document.querySelectorAll(".community_list>ul>li>a");
    let scroll = window.scrollY;
    let lastContRight = communityList[communityList.length - 1].getBoundingClientRect().right;
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let aniTimer;
    window.addEventListener("resize",function () {  
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        lastContRight = communityList[communityList.length - 1].getBoundingClientRect().right;
        document.querySelector("body").style.height = lastContRight + windowHeight - windowWidth + 35 + 'px';
    });
    window.addEventListener("scroll",function () {  
        scroll = window.scrollY;
        communityBox.style.left = "-" + scroll + "px";
        communityBox.children[0].setAttribute("class","ani");
        clearTimeout(aniTimer);
        aniTimer = setTimeout(function(){communityBox.children[0].setAttribute("class","");}, 150);
    });
    
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    lastContRight = communityList[communityList.length - 1].getBoundingClientRect().right;
    document.querySelector("body").style.height = lastContRight + windowHeight - windowWidth + 35 + 'px';
    scroll = window.scrollY;
    communityBox.style.left = "-" + scroll + "px";
    for(var i = 0; i < clickJumpRemove.length; i++){
        clickJumpRemove[i].addEventListener("click",function(e){
            e.preventDefault();
        })
    }
}