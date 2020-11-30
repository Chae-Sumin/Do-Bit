function CALENDAR(){
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
    const calendar = document.getElementById("cal");
    const monthChangeBtn = document.querySelector(".month_box").getElementsByTagName("button");
    const calendarHeader = document.querySelector(".calendar_box>header");
    const scheduleList = document.querySelector(".schedule_box>ul").children;
    let today = new Date();
    let varDay = new Date();
    let selectMonth = new Calendar(varDay);
    makeCalendar(selectMonth);
    function monthChanger(thisDate,dir){ // 0 -> '-', 1 -> '+'
        thisDate.setDate(1);
        let _i = thisDate.getMonth();
        if(dir == 1){
             thisDate.setMonth(_i+1);
        }
        else if(dir == 0){
             thisDate.setMonth(_i-1);
        }
    }

    monthChangeBtn[0].onclick = function(){ // prev
        monthChanger(varDay,0);
        selectMonth = new Calendar(varDay);
        makeCalendar(selectMonth);
    }
    monthChangeBtn[1].onclick = function(){ // next
        monthChanger(varDay,1);
        selectMonth = new Calendar(varDay);
        makeCalendar(selectMonth);
    }
    function makeCalendar(thisDate){
        calendarHeader.querySelector(".month").textContent = thisDate.monthPrint(); // 월 표시
        calendarHeader.querySelector(".year").textContent = thisDate.year; //년도 표시
        for(var i = 0; i < scheduleList.length; i++){
            scheduleList[i].querySelector(".month").textContent = thisDate.monthPrint(3); 
            if(scheduleList[i].getAttribute("class").indexOf("period") != -1) {
                scheduleList[i].getElementsByClassName("month")[1].textContent = thisDate.monthPrint(3); 
            }
        }
        for(var i = 0; i < calendar.rows.length;){ // 표 초기화
            calendar.deleteRow(0);
        }
        for(var i = 0; i < thisDate.weekNum; i++){ // 표 생성
            var tableRow = calendar.insertRow(calendar.rows.length)
            for(var j = 0; j < 7; j++){
                var cell = tableRow.insertCell(j);
                var cellNum = i*7 + j - thisDate.firstDay + 1;
                if(cellNum<=0 || cellNum>=(thisDate.lastDate + 1)) {
                    cell.textContent = "";
                }
                else {
                    cell.textContent = cellNum;
                if(j == 0) cell.setAttribute("class","sun " + "m"+thisDate.month+" d"+cellNum);
                else if(j == 6) cell.setAttribute("class","sat " + "m"+thisDate.month+" d"+cellNum);
                else cell.setAttribute("class","m"+thisDate.month+" d"+cellNum);
            }
            }   
        }
        let todayD = today.getDate();
        let todayM = today.getMonth() + 1;
        if(document.getElementsByClassName("m"+todayM+" d"+todayD)[0] != undefined){
            let todayMark = document.getElementsByClassName("m"+todayM+" d"+todayD)[0];
            todayMark.style.background = "#74CA32";;
            todayMark.style.borderRadius = "100px";;
            todayMark.style.fontSize = "32px";
            todayMark.style.transform = "scale(0.5)";
            todayMark.style.boxShadow = "0px 3px 6px #0003"
        }
    }
}