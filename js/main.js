class Calendar{
    constructor(thisDate){
        this.year = thisDate.getYear() + 1900;
        this.month = thisDate.getMonth() + 1; // 해당 달
        thisDate.setDate(1); // 초기화
        this.firstDay = thisDate.getDay(); // 해당 달의 첫 요일
        thisDate.setMonth(thisDate.getMonth() + 1);
        thisDate.setDate(0); 
        this.lastDate = thisDate.getDate(); // 해당 달의 마지막 달
    }
    get weekNum(){ // 해당 달이 몇 주인지
        return Math.ceil((this.lastDate + this.firstDay) / 7);
    }
    monthPrint(charNum){ // charNum만큼 자른 월 반환( 입력 없으면 전체 반환 )
        if(charNum == undefined) {charNum = this.length}
        switch (this.month) {
            case 1: return 'January'.substr(0,charNum); break;
            case 2: return 'Feburary'.substr(0,charNum); break;
            case 3: return 'March'.substr(0,charNum); break;
            case 4: return 'April'.substr(0,charNum); break;
            case 5: return 'May'.substr(0,charNum); break;
            case 6: return 'June'.substr(0,charNum); break;
            case 7: return 'July'.substr(0,charNum); break;
            case 8: return 'August'.substr(0,charNum); break;
            case 9: return 'September'.substr(0,charNum); break;
            case 10: return 'October'.substr(0,charNum); break;
            case 11: return 'November'.substr(0,charNum); break;
            case 12: return 'December'.substr(0,charNum); break;
        }
    }
}
function MAIN(){
    mainTabChange();
    mainSlidUpDown();
    toDoList();
    habit();
}

function mainTabChange(){ // 메인 투두리스트 <-> 헤빗 탭 교환
    const tabBtn = document.querySelector(".content").querySelector(".tab_btn").getElementsByTagName("button");
    const toDoListBox = document.querySelector("article.toDoList");
    const habitBox = document.querySelector("article.habit");
    tabBtn[0].onclick = function(){
        tabBtn[0].parentNode.setAttribute("class","on");
        tabBtn[1].parentNode.setAttribute("class","");
        toDoListBox.style.display="block";
        habitBox.style.display="none";
    }
    tabBtn[1].onclick = function(){
        tabBtn[1].parentNode.setAttribute("class","on");
        tabBtn[0].parentNode.setAttribute("class","");
        toDoListBox.style.display="none";
        habitBox.style.display="block";
    }

}
function mainSlidUpDown(){ //메인 창 크기 조절
    const slidUpDownBtn = document.querySelector(".slidUpDown");
    const mainBox = document.querySelector("main");
    slidUpDownBtn.onclick = function(){
        if(mainBox.getAttribute("class") == "on") mainBox.setAttribute("class","");
        else mainBox.setAttribute("class","on");
    }
}
function toDoList(){ // 투두리스트 내 동작
    const toDoListDateStat = document.querySelector(".toDoList").querySelector(".date_state");
    const tDLDate = toDoListDateStat.querySelector(".today_set").querySelector(".date");
    const tDLDay = toDoListDateStat.querySelector(".today_set").querySelector(".day");
    const tDLMonth = toDoListDateStat.querySelector(".today_set").querySelector(".year_month");
    const dateList = toDoListDateStat.querySelector(".date_list")
    const dateListDay = dateList.getElementsByClassName("day");
    const dateListDate = dateList.getElementsByClassName("date");
    function toDoclockFunc(){ //투두 리스트 내 시간 관련 동작
        let toDay = new Date();
        let toMonth = new Date();
        let toMouthCal = new Calendar(toMonth);
        tDLDate.textContent = toDay.getDate();
        switch (toDay.getDay()) {
            case 0: tDLDay.textContent = "Sun"; break;
            case 1: tDLDay.textContent = "Mon"; break;
            case 2: tDLDay.textContent = "Tue"; break;
            case 3: tDLDay.textContent = "Wed"; break;
            case 4: tDLDay.textContent = "Thu"; break;
            case 5: tDLDay.textContent = "Fri"; break;
            case 6: tDLDay.textContent = "Sat"; break;
            default: break;
        }
        tDLMonth.textContent = toMouthCal.year + " " + toMouthCal.monthPrint(3);
        //--------------------------------------------
        for(var i = 0; i < 7; i++){
            let todatDateChecker = toDay.getDate() -3 + i;
            let todayDayChecker = toDay.getDay() - 3 + i;
            let beforeMonth = new Date();
            beforeMonth.setDate(0);
            let beforeMonthLastDay = beforeMonth.getDate();
            if(toMouthCal.lastDate < todatDateChecker) {todatDateChecker -= toMouthCal.lastDate;}
            else if(todatDateChecker<1) {todatDateChecker += beforeMonthLastDay}
            dateListDate[i].textContent = todatDateChecker;
            switch (todayDayChecker) {
                case -3: dateListDay[i].textContent = "Thu"; break;
                case -2: dateListDay[i].textContent = "Fri"; break;
                case -1: dateListDay[i].textContent = "Sat"; break;
                case 0: dateListDay[i].textContent = "Sun"; break;
                case 1: dateListDay[i].textContent = "Mon"; break;
                case 2: dateListDay[i].textContent = "Tue"; break;
                case 3: dateListDay[i].textContent = "Wen"; break;
                case 4: dateListDay[i].textContent = "Thu"; break;
                case 5: dateListDay[i].textContent = "Fri"; break;
                case 6: dateListDay[i].textContent = "Sat"; break;
                case 7: dateListDay[i].textContent = "Sun"; break;
                case 8: dateListDay[i].textContent = "Mon"; break;
                case 9: dateListDay[i].textContent = "Tue"; break;
                default: break;
            }
        }

    }
    toDoclockFunc();
    for(var i = 0; i <dateList.getElementsByTagName("button").length; i++){
        dateList.getElementsByTagName("button")[i].onclick = function(){
            for(var j = 0; j <dateList.getElementsByTagName("button").length; j++) dateList.getElementsByTagName("button")[j].parentNode.setAttribute("class","");
            this.parentNode.setAttribute("class","on");
        }
    }
}
function habit(){ //헤빗 내 동작
    const habitBox = document.querySelector(".habit");
    const habitList = habitBox.querySelector(".habit_list").children;
    let habitCoord = [[
        {id : 1 ,x : 0 ,y : -3},{id : 2 ,x : 1 ,y : -4},{id : 3 ,x : 2 ,y : -2},{id : 4 ,x : 3 ,y : 3},{id : 5 ,x : 4 ,y : 1},{id : 6 ,x : 5 ,y : 5},{id : 7 ,x : 6 ,y : 2},{id : 8 ,x : 7 ,y : 0}
    ],[{id : 1 , x : 0 , y : -3},{id : 2 , x : 1 , y : -4},{id : 3 , x : 2 , y : -2},{id : 4 , x : 3 , y : 3},{id : 5 , x : 4 , y : 1},{id : 6 , x : 5 , y : 5},{id : 7 , x : 6 , y : 2},{id : 8 , x : 7 , y : 0}
    ],[{id : 1 , x : 0 , y : -3},{id : 2 , x : 1 , y : -4},{id : 3 , x : 2 , y : -2},{id : 4 , x : 3 , y : 3},{id : 5 , x : 4 , y : 1},{id : 6 , x : 5 , y : 5},{id : 7 , x : 6 , y : 2},{id : 8 , x : 7 , y : 0}
    ],[{id : 1 , x : 0 , y : -3},{id : 2 , x : 1 , y : -4},{id : 3 , x : 2 , y : -2},{id : 4 , x : 3 , y : 3},{id : 5 , x : 4 , y : 1},{id : 6 , x : 5 , y : 5},{id : 7 , x : 6 , y : 2},{id : 8 , x : 7 , y : 0}
    ],[{id : 1 , x : 0 , y : -3},{id : 2 , x : 1 , y : -4},{id : 3 , x : 2 , y : -2},{id : 4 , x : 3 , y : 3},{id : 5 , x : 4 , y : 1},{id : 6 , x : 5 , y : 5},{id : 7 , x : 6 , y : 2},{id : 8 , x : 7 , y : 0}
    ],[{id : 1 , x : 0 , y : -3},{id : 2 , x : 1 , y : -4},{id : 3 , x : 2 , y : -2},{id : 4 , x : 3 , y : 3},{id : 5 , x : 4 , y : 1},{id : 6 , x : 5 , y : 5},{id : 7 , x : 6 , y : 2},{id : 8 , x : 7 , y : 0}
    ]
];
    for(var i = 0; i < habitList.length; i++){
        habitList[i].querySelector(".neg").onclick = function(){
            var index = this.parentNode.getAttribute("class").replace(/[^0-9]/g,"") - 1; 
            this.parentNode.children[2].textContent--;
            habitCoord[index][7].y = this.parentNode.children[2].textContent;
            HabitEffect(this);
            habitGraph();
        }
        habitList[i].querySelector(".pos").onclick = function(){
            var index = this.parentNode.getAttribute("class").replace(/[^0-9]/g,"") - 1; 
            var num = this.parentNode.children[2].textContent * 1;
            this.parentNode.children[2].textContent = num + 1;
            habitCoord[index][7].y = this.parentNode.children[2].textContent;
            HabitEffect(this);
            habitGraph();
        }
        habitList[i].querySelector(".period").onclick = function(){
            var thatList = this.parentNode.parentNode.parentNode;
            for(var j = 0; j < habitList.length; j++) habitList[j].style.height = "88px";
            if(thatList.clientHeight == 88) thatList.style.height = "300px";
            else if(thatList.clientHeight == 300) thatList.style.height = "88px";
        }
    }
    function HabitEffect(ck){
        var point = ck.parentNode.parentNode.parentNode;
        if(point.querySelector(".count").textContent > 0) {
            point.setAttribute("class","posi");
            point.querySelector(".state_icon").children[0].setAttribute("class","fas fa-smile-beam");
        }
        else if(point.querySelector(".count").textContent < 0) {
            point.setAttribute("class","nega");
            point.querySelector(".state_icon").children[0].setAttribute("class","fas fa-frown-open");
        }
        else if(point.querySelector(".count").textContent == 0) { 
            point.setAttribute("class","");
            point.querySelector(".state_icon").children[0].setAttribute("class","fas fa-minus");
        }
    }
    habitGraph();
    function habitGraph(add){
        let canvases = habitBox.getElementsByClassName("coord_plane");
        let coordBood = habitCoord;
        let cellX = 280 / 7;
        let cellY = 145 / 12;
        for(var i = 0; i < canvases.length; i++){
            if(canvases[i].getContext)
            var canvas = canvases[i].getContext("2d");
            canvas.clearRect(0, 0, canvases[i].width, canvases[i].height);
            canvas.beginPath();
            canvas.strokeStyle = '#74CA32';
            canvas.lineWidth = 3;
            canvas.lineJoin = "round"
            canvas.beginPath();
            canvas.moveTo(coordXgen(i,0),coordYgen(i,0));
            for(var j = 1; j < coordBood[i].length; j ++){
                canvas.lineTo(coordXgen(i, j),coordYgen(i, j));
            }
            canvas.stroke();
        }
        function coordXgen(i,j){
            let coordX = coordBood[i][j].x * cellX
            const validation = -10;
            coordX -= validation;
            return(coordX)
        }
        function coordYgen(i,j){
            let coordY = 145 - (parseInt(coordBood[i][j].y) + 6) * cellY
            const validation = 0;
            coordY -= validation;
            return(coordY)
        }
    }
    const graphX = document.querySelectorAll(".line_X")
    const graphXs = []
    let graphXdate = new Date();
    for(var i = 0; i < graphX.length; i++){
        graphXs.push(graphX[i].children);
    }
    for(var i = graphXs[0].length - 1; i >= 0; i--){
        let date = graphXdate.getDate();
        let month = graphXdate.getMonth() + 1;
        for(var j = 0; j < graphXs.length; j++){
            graphXs[j][i].children[0].textContent = month;
            graphXs[j][i].children[1].textContent = date;
        }
        graphXdate.setDate(date - 1);
    }
}