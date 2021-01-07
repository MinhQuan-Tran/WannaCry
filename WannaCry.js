var b=setInterval(time, 500);
document.getElementById("address").innerHTML = localStorage.getItem("address");

function time() {
  document.getElementById("timeLeft3").innerHTML = localStorage.getItem("timeLeft3");
  document.getElementById("timeLeft7").innerHTML = localStorage.getItem("timeLeft7");
  document.getElementById("day3").innerHTML = localStorage.getItem("day3");
  document.getElementById("day7").innerHTML = localStorage.getItem("day7");
}

function contactUs() {
  var message = prompt("Message");
}

function checkPayment() {
  alert("Checking your payment...\nConnecting to server...\n");
  alert("Failed to check your payment!\nPlease make sure your computer is connected to the internet and your Interner Service Provider (ISP) does not block connections to the TOR Network!");
}

function decrypt() {
  localStorage.setItem("Test", "Test1.txt");
  alert("Pay now, if you want to decrypt ALL your files!");
}

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
