function CHARACTER(){
    const characterSection = document.querySelector("section.character");
    const itemBtn = document.querySelector(".character_menu").getElementsByTagName("button");
    const item = document.querySelector(".character_section").getElementsByClassName("itm");
    const moneyInfo = document.querySelector(".character_menu .money").getElementsByTagName("span");
    const charInfo = document.querySelector(".character_status ul").getElementsByClassName("in");
    const announce = document.querySelector(".announce");
    let growthLevel = 1;
    for(var i = 0; i < itemBtn.length; i++){
        itemBtn[i].onclick = function () {
            let index = parseInt(this.getAttribute("class").replace(/[^0-9]/g,"")) - 1; 
            const classStr = item[index].getAttribute("class");
            let validation;
            if(classStr.indexOf("on") == -1){ 
            switch (index) {
                case 0:
                    validation = charInfoSet(0,1000,10);
                    if(validation===true){item[0].setAttribute("class",classStr + " on")}
                    break;
                case 1:
                    validation = charInfoSet(0,3000,30)
                    if(validation===true){item[1].setAttribute("class",classStr + " on")}
                    break;
                case 2:
                    validation = charInfoSet(20,1000,10,15)
                    if(validation===true){item[2].setAttribute("class",classStr + " on")}
                    break;
                case 3:
                    validation = charInfoSet(10,3000,5,10)
                    if(validation===true){item[3].setAttribute("class",classStr + " on")}
                    break;
            } 
            if(validation !== true){
                if(validation.length == 1){announce.textContent = "More " + validation[0] + " are required!"}
                else {announce.textContent = "More " + validation[0] + " and " + validation[1] + " are required!"}
                announce.setAttribute("class","announce on");
            }
            characterSection.setAttribute("class","character level"+growthLevel);
            let aniTimer = setTimeout(function(){
                item[index].setAttribute("class",classStr);
                announce.setAttribute("class","announce");
                clearTimeout(aniTimer);
            },3000);
            }
        }
    }
    function charInfoSet(_d,_c,_g,_a){ //dia coin growth affaction
        let validation = [];
        if(_d != undefined) {
            if(moneyInfo[0].textContent >= _d) {
                moneyInfo[0].textContent -= _d;
            } else {validation.push("diamonds")}
        }
        if(_c != undefined) {
            if(moneyInfo[1].textContent >= _c) {
                if(validation.length == 0){
                    moneyInfo[1].textContent -= _c;
                }
            } else {validation.push("coins")}
        }
        if(validation.length != 0) return validation;
        if(_g != undefined) {
            charInfo[0].textContent = parseInt(charInfo[0].textContent) + parseInt(_g);
            while(charInfo[0].textContent>100){
                charInfo[0].textContent -= 100;
                growthLevel += 1;
                if(growthLevel > 3){
                    charInfo[0].textContent = 100
                    growthLevel = 3;
                }
            }
            charInfo[0].style.width = charInfo[0].textContent + "%";
        }
        if(_a != undefined) {
            charInfo[1].textContent = parseInt(charInfo[1].textContent) + parseInt(_a);
            charInfo[1].style.width = charInfo[1].textContent + "%";
        }
        return true;
    }
}