function COMMON(){
    friendsFnc();
    clocK();
    
    //------------------------------------------
    const makeNewBtn = document.querySelector(".makeNewBtn");
    const drawUp = document.querySelector(".draw_up");
    const appHeader = document.querySelector("header");
    const h1cont = appHeader.getElementsByTagName("h1")[0].textContent;
    console.log(h1cont);
    makeNewBtn.onclick = function (){
        if(drawUp.getAttribute("class").indexOf("on") == -1){
            drawUp.setAttribute("class","draw_up on");
            appHeader.setAttribute("class","make_new");
            appHeader.getElementsByTagName("h1")[0].textContent = "Make New";
        }
        else{
            drawUp.setAttribute("class","draw_up");
            appHeader.setAttribute("class","");
            appHeader.getElementsByTagName("h1")[0].textContent = h1cont;
        }
    }
    //------------------------------------------

    const RmenuBtn = document.querySelector(".hamburger");
    const RmenuCloseBtn = document.querySelector(".Rmenu_close");
    const drawRight = document.querySelector(".draw_right");
    const RmenuDepth2Btn = document.querySelector(".setting_menu").getElementsByTagName("button");
    RmenuBtn.onclick = function (){
        if(drawRight.getAttribute("class").indexOf("on") == -1){
            drawRight.setAttribute("class","draw_right on");
            
        }
    }
    RmenuCloseBtn.onclick = function (){
        if(drawRight.getAttribute("class").indexOf("on") != -1){
            drawRight.setAttribute("class","draw_right");
            for(var j = 0; j < RmenuDepth2Btn.length; j++) RmenuDepth2Btn[j].parentNode.setAttribute("class","");
        }
    }
    for(var i = 0; i < RmenuDepth2Btn.length; i++){
        RmenuDepth2Btn[i].onclick = function(){
            if(this.parentNode.getAttribute("class") == "on"){
                this.parentNode.setAttribute("class","");
            } 
            else {
                for(var j = 0; j < RmenuDepth2Btn.length; j++) RmenuDepth2Btn[j].parentNode.setAttribute("class","");
                this.parentNode.setAttribute("class","on");
            }
        }
    }
}
function friendsFnc() {
    const friendsBtn = document.querySelector(".friendMenu");
    const friendsCloseBtn = document.querySelector(".friends_close");
    const drawLeft = document.querySelector(".draw_left");
    const connectList = document.querySelector(".friends_list").getElementsByClassName("connect");
    friendsBtn.onclick = function (){
        for(var i = 1; i < connectList.length; i++){
            var Rnum = parseInt(Math.random()*3);
            if(Rnum == 0) connectList[i].setAttribute("class","connect on");
            else connectList[i].setAttribute("class","connect");
        }
        if(drawLeft.getAttribute("class").indexOf("on") == -1){
            drawLeft.setAttribute("class","draw_left on");
            
        }
    }
    friendsCloseBtn.onclick = function (){
        if(drawLeft.getAttribute("class").indexOf("on") != -1){
            drawLeft.setAttribute("class","draw_left");
        }
    }
}
function clocK() { 
    var statusBarTime = document.querySelector(".status_bar").querySelector(".time");
    function clockFunc(){
        var toDay = new Date();
        statusBarTime.children[0].textContent = toDay.getHours();
        statusBarTime.children[1].textContent = toDay.getMinutes();
    }
    clockFunc();
    var clock = setInterval(clockFunc, 1000);
    clock;
}
