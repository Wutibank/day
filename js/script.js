var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var textDate = "";
var txWeek = "";

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

Date.prototype.getWeek = function () {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }

    var weekNumber = (new Date()).getWeek();

    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var now = new Date();
//    document.write(dayNames[now.getDay()] + " (" + weekNumber + ").");


//คำนวณว่าวันนี้วันที่เท่าไรใน 1 ปี
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

//ถ้าเป็น leap year
if ((yyyy % 4 == 0) && (yyyy % 100 != 0) || (yyyy % 400 == 0)) {
    var TotalY = 366;
} else {
    var TotalY = 365;
}

textDate += today = dayNames[now.getDay()] + '    ' + dd + '/' + mm + '/' + yyyy + '  : ' + day;
txWeek += 'สัปดาห์ที่ : ' + weekNumber;

//คำนวณเวรประจำวัน
var names = ["แบงค์เบ๋ย", "เชน" , "เป้", "มอส", "เปิ้ล"];
var srcimage = ["images/bank.png" , "images/chen.png" , "images/pae.png" , "images/moss.jpg" , "images/ple.png"]
var ramname = [];
var ramimage = [];
var text = "";
var texttomore = "";
var i;
var d = day%5;
var d2 = d + 1;
if (d2 == 5)
{
    d2 = 0;
}

//แสดงผล
text += names[d] + "<br>";
texttomore += 'วันพรุ่งนี้ : ' + names[d2];
document.getElementById("profile").src=srcimage[d];
////////////////////////

//คำนวณเวรประจำสัปดาห์
var names_w = [ "เป้", "มอส", "เปิ้ล" , "แบงค์เบ๋ย", "เชน"];
var srcimage_w = ["images/pae.png" , "images/moss.jpg" , "images/ple.png" , "images/bank.png" , "images/chen.png" , ]
var ramname2 = [];
var ramimage2 = [];
var text2 = "";
var texttomore2 = "";
var i;
var w = weekNumber%5;
var w2 = w + 1;

if (w2 == 5)
{
    w2 = 0;
}

//แสดงผล
text2 += names_w[w] + "<br>";
texttomore2 += 'สัปดาห์หน้า : ' + names_w[w2];
document.getElementById("profile2").src=srcimage_w[w];
////////////////////////
$('#name-day').addClass('text-center, names');
$('#name-day2').addClass('text-center, names2');
$('#name-week').addClass('text-center, names');
$('#name-week2').addClass('text-center, names2');

document.getElementById("name-day").innerHTML = text;
document.getElementById("name-day2").innerHTML = texttomore;
document.getElementById("name-week").innerHTML = text2;
document.getElementById("name-week2").innerHTML = texttomore2;
document.getElementById("date").innerHTML = textDate;
document.getElementById("txWeek").innerHTML = txWeek;
