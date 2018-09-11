window.onload = function(){
    var today = new Date();
    var year, month, day, hour, minute, second;
    year = today.getFullYear();
    month = today.getMonth()+1;
    day = today.getDate();
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();

    this.document.getElementById("time").textContent= year + "年" + month + "月" + day + "日 " + hour + "時" + minute + "分" + second + "秒";
     
}