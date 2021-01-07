var time = new Date();
var lastTime = new Date();
var currentTime = new Date();
var timeCounting = new Date( currentTime.getTime() - lastTime.getTime() );
var random = Math.floor(Math.random() * 3);
localStorage.setItem("Test", "Test.txt.WNCRY");
var getData;
var activated = false;
var testDecrypted = true;

switch (random) {
  case 0: localStorage.setItem("address", "115p7UMMngoj1pMvkpHijcRdfJNXj6LrLn");
          break;

  case 1: localStorage.setItem("address", "12t9YDPgwueZ9NyMgw519p7AA8isjr6SMw");
          break;

  default: localStorage.setItem("address", "13AM4VW2dhxYgXeQepoHkHSQuy6NgaEb94");
}

const threeDays = 259200000;
const sevenDays = 604800000;

var day3 = new Date( lastTime.getTime() + threeDays );
localStorage.setItem( "day3", day3.toLocaleString("en-IE") );
var day7 = new Date( lastTime.getTime() + sevenDays );
localStorage.setItem( "day7", day7.toLocaleString("en-IE") );

function activateWannaCry() {
  if (activated == false){
    document.getElementById("WannaCry").innerHTML = "@WanaDecryptor@.exe";
    document.getElementById("WannaCryIcon").src = "Hand.png";
    document.body.style.backgroundImage = "url('WannaCry_Background.png')";
    document.getElementById("Test").href = "Test.txt.WNCRY";
    document.getElementById("test").innerHTML = "Test.txt.WNCRY";
    document.getElementById("testIcon").src = "File icon.png";
    document.getElementById("display").style = "text-decoration: none; display: noremal;";
    document.getElementById("display1").style = "text-decoration: none; display: noremal;";
    document.getElementById("display1").href = "Please_Read_Me" + random.toString() + ".txt";
    testDecrypted = false;
    lastTime = new Date();
    var b=setInterval(counter, 500);
    activated = true;
  }
  openWindow(1, 'Wana Decryptor 2.0');
}

function counter() {
  currentTime = new Date();
  timeCounting = currentTime.getTime() - lastTime.getTime();
  //console.log(convertMiliseconds(lastTime));
  localStorage.setItem( "timeLeft3", convertMiliseconds(threeDays - timeCounting) );
  localStorage.setItem( "timeLeft7", convertMiliseconds(sevenDays - timeCounting) );
  if ( timeCounting > threeDays )
  {
    document.getElementById("money").innerHTML = 600;
  }
  getData = localStorage.getItem("Test");
  if (getData == "Test1.txt" && testDecrypted == false) {
    document.getElementById("Test").href = getData;
    document.getElementById("test").innerHTML = "Test.txt";
    document.getElementById("testIcon").src = "Txt icon.png";
    testDecrypted = true;
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function convertMiliseconds(miliseconds) {
  if (miliseconds < 0)
  {
    miliseconds = 0;
  }

  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  days = checkTime(days);
  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  return days + ":" + hours + ":" + minutes + ":" + seconds;
}

function closeWindow(number) {
  document.getElementById("windows" + number.toString()).style.display = "none";
}

function openWindow(number, name) {
  if (number == 2 && testDecrypted == false) return 0;
  document.getElementById("windows" + number.toString()).style.display = "flex";
  document.getElementById("nameOfApplication"+ number.toString()).innerHTML = name;
}




dragElement(document.getElementById("windows0"));
dragElement(document.getElementById("windows1"));
dragElement(document.getElementById("windows2"));
dragElement(document.getElementById("windows3"));
dragElement(document.getElementById("windows4"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
