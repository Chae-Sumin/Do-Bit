function autoChat(){
    const chatList = document.querySelectorAll(".dialog_body>li");
    let ct = [];
    ct[0] = setTimeout(function(){
        chatList[1].classList.add("ellipsis");
        ct[1] =setTimeout(function(){
            chatList[1].classList.remove("ellipsis");
            chatList[1].classList.add("on");
            // ct[3] = setTimeout(function(){},2000);
            ct[2] = setTimeout(function(){ 
                chatList[2].classList.add("ellipsis");
                ct[3] = setTimeout(function(){
                    chatList[2].classList.remove("ellipsis");
                    chatList[2].classList.add("on");
                    ct[4] = setTimeout(function(){ 
                        chatList[3].classList.add("ellipsis");
                        ct[5] = setTimeout(function(){
                            chatList[3].classList.remove("ellipsis");
                            chatList[3].classList.add("on"); 
                            ct[6] = setTimeout(function(){
                                chatList[4].classList.add("ellipsis");
                                ct[7] = setTimeout(function(){
                                    chatList[4].classList.remove("ellipsis");
                                    chatList[4].classList.add("on");
                                    for(var i = 0; i < ct.length; i++) {clearTimeout(ct[i]);}
                                },2000);
                            },1000);
                        },2000);
                    },1000);
                },2000);
            },1000);
        }, 2000);
    },1000);
}
function closeChat(){
const RmenuBtn = document.querySelector(".hamburger");
        RmenuBtn.onclick = function(){
            window.history.back();
        }
    }
        