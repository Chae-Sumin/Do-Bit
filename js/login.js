window.onload = function(){
    const tree = document.getElementById("tree");
    const leaves = tree.querySelector("svg");
    const leaf = leaves.getElementsByClassName("leaf"); 
    for(var i = 0; i < leaf.length; i++){
        let randAni = "opAni "+parseInt(Math.random()*500 + 1000)+"ms ease "+parseInt(Math.random()*1000)+"ms forwards";
        leaf[i].style.animation = randAni;
    }
    const loginBtn = document.getElementById("userLogin");
    const body = document.querySelector("body");
    loginBtn.onclick = function(e){
        e.preventDefault();
        body.setAttribute("class","login");
        let loginTimer = setTimeout(function(){location.href = "./main.html";},1000); 
    }
}
